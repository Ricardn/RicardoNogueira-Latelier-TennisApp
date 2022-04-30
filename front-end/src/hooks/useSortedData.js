import { useEffect, useState } from "react";

import useFetch from "./useFetch";

export default function useSortedData() {
  const { data, loading, error } = useFetch(
    "https://data.latelier.co/training/tennis_stats/headtohead.json"
  );

  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    if (data) {
      const sortedPlayers = data.players;
      sortedPlayers.sort((a, b) => a.data.rank - b.data.rank);
      setSortedData(sortedPlayers);
    }
  }, [data]);

  return { sortedData, loading, error };
}
