import React, { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [books, setBooks] = useState(null);


  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error("Auth Error with Context Provider");
  }
  return context;
}