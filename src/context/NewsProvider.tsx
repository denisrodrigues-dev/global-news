import React from 'react';
import NewsContext from './NewsContext';

type NewsProviderProps = {
  children: React.ReactNode;
};

export default function NewsProvider({ children }: NewsProviderProps) {
  const value = {
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}
