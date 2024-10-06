import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = () => {
  return <AuthContext.Provider />;
};
