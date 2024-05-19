import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";
import Banner from "../components/Banner/Banner";

function NewPopular() {
  return (
    <>
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </>
  );
}

export default NewPopular;
