import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [incorrectLogin, setIncorrect] = useState(false);

  const navigate = useNavigate();

  const { userValue, signupValue } = useContext(UserContext);
  const [user, setUser] = userValue;
  const [succesfulSignup, setSuccess] = signupValue;

  if (user) {
    setSuccess(false);
    navigate(`/play/${username}`);
  }

  const handleLogin = async () => {
    console.log(username, password, "in handlelogin");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(data);

    if (data.username) {
      setUser(data.username);
      setIncorrect(false);
      console.log(user, "after setUser");
    }
    if (data.error) {
      setIncorrect(true);
      console.log("error in handleLogin, no username");
    }
  };

  return (
    <div id="login-container">
      {succesfulSignup ? (
        <div id="success-signup">
          <h3>Successful Signup!</h3>
          <p>Please login</p>
        </div>
      ) : null}
      <div className="login-signup">
        <input
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="submit-btn pointer"
          type="submit"
          value="Login"
          onClick={() => handleLogin()}
        />
      </div>
      {incorrectLogin ? (
        <p id="incorrect-login">Incorrect username and/or password</p>
      ) : null}
      <span>
        Don&apos;t have an account? <a href="./signup">Sign up</a>
      </span>
    </div>
  );
};

export default Login;
