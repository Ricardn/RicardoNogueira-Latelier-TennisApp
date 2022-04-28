import React from "react";

import PlayerCard from "../player/PlayerCard";

const PlayerList = ({ players }) => {
  return (
    <div className="playerList_container">
      <div className="playerList_card">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
