import React, { useState, useMemo } from 'react';

type NextLevelContextType = {
  next: string,
};

export const NextLevelContext = React.createContext<NextLevelContextType>({
  next: '',
});

type NextLevelProviderType = {
  children: React.ReactNode;
  nextLevelRoute: string;
};

export const NextLevelProvider: React.FC<NextLevelProviderType> = ({
  children,
  nextLevelRoute,
}) => {
  const [next] = useState(nextLevelRoute);

  const value = useMemo(() => ({
    next,
  }), [nextLevelRoute]);

  return (
    <NextLevelContext.Provider value={value}>
      {children}
    </NextLevelContext.Provider>
  );
};
