import React from "react";

import Skeleton from "../components/skeleton/Skeleton";
import useSortedData from "../hooks/useSortedData";
import SearchBar from "../components/searchBar/SearchBar";

const Home = () => {
  const { sortedData, loading, error } = useSortedData();

  if (loading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="body_container">
      <SearchBar players={sortedData} />
    </div>
  );
};

export default Home;
