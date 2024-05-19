import React from "react";
import Row from "../components/Rows/Row/Row";
import requests from "../utils/requests";

function BrowseLan() {
  return (
    <>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default BrowseLan;
