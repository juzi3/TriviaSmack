import React from "react";

const LeaderBoard = ({ leaders }) => {
  console.log(leaders, "from leaderboard");
  return leaders ? (
    <section id="leaderboard">
      <header>Top 5 Players</header>
      <div id="leaderboard-col-title">
        <span>Rank</span>
        <span>Score</span>
        <span>Name</span>
      </div>
      <div id="leader-row-container">
        {leaders.map((leader, i) => {
          const { username, score } = leader;
          return (
            <div key={username + score} className="leader-row">
              <h3>{i + 1}</h3>
              <h3>{score}</h3>
              <h3>{username}</h3>
            </div>
          );
        })}
      </div>
    </section>
  ) : (
    <h1 className="loading-spinner">🌀</h1>
  );
};

export default LeaderBoard;
