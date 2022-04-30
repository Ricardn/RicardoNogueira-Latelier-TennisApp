import React from "react";

import Skeleton from "../components/skeleton/Skeleton";
import useSortedData from "../hooks/useSortedData";
import SearchBar from "../components/searchBar/SearchBar";
import TennisBall from "../images/TennisBall.png";

const Home = () => {
  const { sortedData, loading, error } = useSortedData();

  if (loading) {
    return (
      <div className="body_container">
        <div className="body_list">
          <Skeleton />
        </div>
        <div className="body_tennisBall">
          <img src={TennisBall} alt="" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="body_container">
      <div className="body_list">
        <SearchBar players={sortedData} />
      </div>
      <div className="body_tennisBall">
        <img src={TennisBall} alt="" />
      </div>
    </div>
  );
};

export default Home;
