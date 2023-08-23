import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div id="signup-container">
      <div className="login-signup">
        <input
          name="username"
          type="text"
          placeholder="username"
          required="true"
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          required="true"
        ></input>
        <input className="submit-btn pointer" type="submit" value="Sign up" />
      </div>
    </div>
  );
};

export default Signup;
