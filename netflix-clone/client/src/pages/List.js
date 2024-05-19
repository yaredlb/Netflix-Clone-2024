import React from 'react';
import Row from '../components/Rows/Row/Row';
import requests from '../utils/requests';

function List() {
  return (
    <div>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

    </div>
  )
}

export default List;
