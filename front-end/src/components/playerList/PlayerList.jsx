import React from "react";

import PlayerCard from "../player/PlayerCard";

const PlayerList = ({ players }) => {
  return (
    <div>
      PlayerList
      <div>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
