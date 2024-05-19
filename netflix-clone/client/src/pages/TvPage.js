import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";

function TvPage() {
  return (
    <>
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default TvPage;
