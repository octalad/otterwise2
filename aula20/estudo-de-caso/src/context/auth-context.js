import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  return <AuthContext.Provider {...props} />;
};
