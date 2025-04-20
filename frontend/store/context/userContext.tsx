import { createContext, useState, useContext } from 'react';

export interface UserData {
  idToken: string;
  email: string;
  displayName: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
