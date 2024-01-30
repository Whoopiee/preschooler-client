import React, { useMemo } from 'react';
import { AudioTrack, useAudioTrack } from '@core/hooks/useAudioTrack';

type AudioLevelContextType = {
  track: AudioTrack | null;
  isPlaying: boolean;
  toggleTrack: (audioTrack: { id: string; src: string; }) => void;
  progress: number;
};

export const AudioLevelContext = React.createContext<AudioLevelContextType>({
  track: null,
  isPlaying: false,
  toggleTrack: () => {},
  progress: 0,
});

type AudioLevelProviderType = {
  children: React.ReactNode;
};

export const AudioLevelProvider: React.FC<AudioLevelProviderType> = ({
  children,
}) => {
  const {
    track,
    isPlaying,
    toggleTrack,
    progress,
  } = useAudioTrack();

  const value = useMemo(() => ({
    track,
    isPlaying,
    toggleTrack,
    progress,
  }), [track, isPlaying, toggleTrack, progress]);

  return (
    <AudioLevelContext.Provider value={value}>
      {children}
    </AudioLevelContext.Provider>
  );
};
