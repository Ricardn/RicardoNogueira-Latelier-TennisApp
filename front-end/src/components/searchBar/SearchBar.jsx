import React, { useState } from "react";
import PlayerList from "../playerList/PlayerList";

const SearchBar = ({ players }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredPlayers = players.filter((player) => {
    return (
      player.firstname.toLowerCase().includes(query.toLowerCase()) ||
      player.lastname.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="body_content">
      <div className="body_searchBar">
        <input
          placeholder="Rechercher un joueur"
          type="text"
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className="body_playersList">
        <PlayerList players={filteredPlayers} />
      </div>
    </div>
  );
};

export default SearchBar;
