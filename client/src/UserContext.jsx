import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [succesfulSignup, setSuccess] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userValue: [user, setUser],
        signupValue: [succesfulSignup, setSuccess],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
