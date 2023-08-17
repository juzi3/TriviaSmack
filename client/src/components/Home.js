import React from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const Home = () => {
  return (
    <div id="home-page">
      <h1>Welcome</h1>

      <div>
        <Link to="/login">
          <h2 className="enter-heading">Login</h2>
        </Link>
        <span id="or">Or</span>
        <Link to="/play">
          <h2
            className="enter-heading"
            onClick={() => Cookie.set("username", "Guest")}
          >
            Play as Guest
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
