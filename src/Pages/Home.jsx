import React from 'react'
import LandingPage from './LandingPage';
import Categories from './Categories';
import Menu from './Menu';
import Footer from '../Components/Footer';
// import Modal from '../Components/Modal';

const Home = () => {
  return (
    <>
    <LandingPage />
    <Categories />
    <Menu />
    {/* <Modal /> */}
    <Footer />
    </>
  )
}

export default Home