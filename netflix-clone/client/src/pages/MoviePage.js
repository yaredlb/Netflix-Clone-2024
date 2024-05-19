import React from 'react';
import Row from '../components/Rows/Row/Row';
import requests from '../utils/requests';

function MoviePage() {
  return (
    <>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </>
  )
}

export default MoviePage;
