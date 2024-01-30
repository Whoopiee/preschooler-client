import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { resolveAudio } from '@helpers/resolver';

export type AudioTrack = {
  id: string;
  audio: HTMLAudioElement;
};

export const useAudioTrack = () => {
  const [track, setTrack] = useState<AudioTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressTracker = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (track) {
      // handle error "failed because the user didn't interact with the document first"
      track.audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));

      progressTracker.current = setTrackInterval();

      track.audio.addEventListener('ended', handleAudioEnded);
    }
  }, [track]);

  const setTrackInterval = useCallback(() => (
    setInterval(() => {
      if (track?.audio?.duration && track.audio.duration > 0) {
        setProgress((track.audio.currentTime / track.audio.duration) * 100);
      }
    }, 100)
  ), [track]);

  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    clearInterval(progressTracker.current);
  }, []);

  const toggleTrack = (audioTrack: { id: string, src: string }) => {
    setProgress(0);
    clearInterval(progressTracker.current);

    if (audioTrack.id === track?.id && isPlaying) {
      track?.audio.pause();
      setIsPlaying(false);

      return;
    }

    track?.audio.pause();
    const audio = new Audio(resolveAudio(audioTrack.src));

    setTrack({
      id: audioTrack.id,
      audio,
    });
  };

  // all desctructing in another useEffect
  useEffect(() => {
    return () => {
      track?.audio.pause();
      track?.audio.removeEventListener('ended', handleAudioEnded);
      clearInterval(progressTracker.current);
    };
  }, [track]);

  return {
    track,
    isPlaying,
    toggleTrack,
    progress,
  };
};
