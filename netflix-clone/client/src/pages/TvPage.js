import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";
import Banner from "../components/Banner/Banner";

function TvPage() {
  return (
    <>
      <Banner />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default TvPage;
