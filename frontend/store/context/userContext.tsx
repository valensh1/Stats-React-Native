import { createContext } from 'react';

interface UserData {
  id: number;
}

export const UserContext = createContext<UserData>({ id: 0 });

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <UserContext.Provider value={{ id: 0 }}>{children}</UserContext.Provider>
  );
};
