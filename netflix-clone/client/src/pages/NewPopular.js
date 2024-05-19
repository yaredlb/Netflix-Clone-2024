import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";

function NewPopular() {
  return (
    <>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </>
  );
}

export default NewPopular;
