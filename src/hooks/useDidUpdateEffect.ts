import {
  useRef,
  useEffect,
  EffectCallback,
  DependencyList,
} from 'react';

export const useDidUpdateEffect = (
  fn: EffectCallback,
  inputs: DependencyList,
) => {
  const didMountRef = useRef(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }

    didMountRef.current = true;
  }, inputs);
};
