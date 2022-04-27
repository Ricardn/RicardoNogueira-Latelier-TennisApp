import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div>
      PlayerCard
      <h4>
        {player.firstname} {player.lastname} {player.data.rank}
      </h4>
    </div>
  );
};

export default PlayerCard;
