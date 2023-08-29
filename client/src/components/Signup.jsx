import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Signup = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [_, setSuccess] = useContext(UserContext).signupValue;

  const navigate = useNavigate();

  const handleSignUp = async () => {
    console.log(username, password, "in handlesignup");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(data);

    if (data.username) {
      setSuccess(true);
      navigate("/login");
      console.log(username, "after signup");
    }
    if (data.error) {
      setError(data.error.error);
      console.log("error in handlesignup", data.error.error);
    }
  };

  return (
    <div id="signup-container">
      <div className="login-signup">
        <input
          name="username"
          placeholder="username"
          required="true"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          required="true"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="submit-btn pointer"
          type="submit"
          value="Sign up"
          onClick={() => handleSignUp()}
        />
      </div>
      {error ? <p id="incorrect-login">{error}</p> : null}
    </div>
  );
};

export default Signup;
