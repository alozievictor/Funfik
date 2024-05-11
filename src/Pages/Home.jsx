import React from 'react'
import Hero from '../Components/Hero';
import HomeForm from '../Components/HomeForm';
import Reservation from '../Components/Reservation';
import Homedest from '../Components/Homedest';

const Home = () => {
  return (
    <React.Fragment>
        <Hero/>
        <Reservation/>
        <Homedest/>
    </React.Fragment>
  )
}

export default Home;