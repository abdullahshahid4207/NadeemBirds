import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from '../images/parrot'
import Header from '../components/Header';
import Carousel  from '../components/Carousel';
import Contact from '../components/Contact';
import Cards from '../components/Cards';
const Home = () => {
    return (
        <div>
            <Header />
            {/* <br /> */}
            <Carousel />
            {/* <br /> */}
            {/* <Cards />
            <Contact /> */}
        </div>
    );
};

export default Home;

