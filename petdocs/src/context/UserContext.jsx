import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nick, setNick] = useState('');

  return (
    <UserContext.Provider value={{ nick, setNick }}>
      {children}
    </UserContext.Provider>
  );
};
