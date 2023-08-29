import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import { UserContext } from "../UserContext";

const Home = () => {
  const [user] = useContext(UserContext).userValue;

  return user ? (
    <div id="home-page">
      <h1>Welcome {user}!</h1>
      <Link to={`/play/${user}`}>
        <h2 id="home-to-play">Play</h2>
      </Link>
    </div>
  ) : (
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
