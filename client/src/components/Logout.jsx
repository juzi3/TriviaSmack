import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Logout = () => {
  const [prevUser, setPrev] = useState(null);
  const [user, setUser] = useContext(UserContext).userValue;

  useEffect(() => {
    setPrev(user);
    setUser(null);
  }, []);

  return (
    <div id="logout-container">
      <h1>Bye {prevUser}! See you next time!</h1>
    </div>
  );
};

export default Logout;
