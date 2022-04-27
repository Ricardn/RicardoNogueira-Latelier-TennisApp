import React, { useEffect, useState } from "react";

import useSortedData from "../hooks/useSortedData";

import PlayerList from "../components/playerList/PlayerList";

const Home = () => {
  const { sortedData, loading, error } = useSortedData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div>
      Home
      <PlayerList players={sortedData} />
    </div>
  );
};

export default Home;
