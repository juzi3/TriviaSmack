import React from "react";
import Leader from "./Leader";

const LeaderBoard = ({ leaders }) => {

  return (
    <section id="leaderboard">
      <header>Top 5 Players</header>
      <div id="leaderboard-col-title">
        <span>Rank</span>
        <span>Score</span>
        <span>Name</span>
      </div>
      <div id="leader-row-container">
        {leaders.slice(0, 5).map((leader, i) => {
          const { username, score } = leader;
          return (
            <Leader key={i} username={username} score={score} rank={i + 1} />
          );
        })}
      </div>
    </section>
  );
};

export default LeaderBoard;
