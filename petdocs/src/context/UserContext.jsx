import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nick, setNick] = useState('');

  const logout = () => {
    setNick('');
  };

  return (
    <UserContext.Provider value={{ nick, setNick, logout }}>
      {children}
    </UserContext.Provider>
  );
};
