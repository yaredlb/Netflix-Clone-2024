import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";
import Banner from "../components/Banner/Banner";

function BrowseLan() {
  return (
    <>
      <Banner />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default BrowseLan;
