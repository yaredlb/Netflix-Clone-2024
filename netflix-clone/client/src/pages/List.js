import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";
import Banner from "../components/Banner/Banner";

function List() {
  return (
    <div>
      <Banner />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
    </div>
  );
}

export default List;
