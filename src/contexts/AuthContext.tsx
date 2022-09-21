import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [name, setName] = useState<string>('');

  return (
    <AuthContext.Provider value={{ name, setName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
