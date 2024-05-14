import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList/RowList';
import Footer2 from '../../components/Footer/Footer2';
import NavBar from '../../components/Header/NavBar';
import List from '../../components/Header/NavBar';

const Home = () => {
  return (
    <>
        <Header />
        {/* <List/> */}
        {/* <NavBar/> */}
        <Banner />
        <RowList />
        {/* <Footer /> */}
        <Footer2/>
    </>
  )
}

export default Home;
