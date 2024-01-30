import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type UseGoNextLevelProps = {
  next: string;
  errorMessage?: string;
  checkIsGameFinished?: () => boolean;
};

export const useGoNextLevel = ({
  next,
  errorMessage,
  checkIsGameFinished,
}: UseGoNextLevelProps) => {
  const [willGoNextLevel, setWillGoNextLevel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (willGoNextLevel) {
      navigate(next);
    }
  }, [willGoNextLevel]);

  const goNextLevel = (): void => {
    if (!checkIsGameFinished || checkIsGameFinished()) {
      toast.dismiss();
      toast.success('Завдання виконане!');

      setWillGoNextLevel(true);

      return;
    }

    if (!toast.isActive('Level error')) {
      toast.dismiss();
      toast.error(errorMessage, { toastId: 'Level error' });
    }
  };

  return { goNextLevel };
};
