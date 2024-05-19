import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Error4 from './pages/Errro4/Error4';
import TvPage from './pages/TvPage';
import MoviePage from './pages/MoviePage';
import NewPopular from './pages/NewPopular';
import List from './pages/List';
import BrowseLan from './pages/BrowseLan';

function App() {
  return (
    <div className='app'>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/popular' element={<NewPopular />} />
        <Route path='/list' element={<List />} />
        <Route path='/browse' element={<BrowseLan />} />
        <Route path='*' element={<Error4 />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
