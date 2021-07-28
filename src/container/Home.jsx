import React from 'react';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} className='p-5'>
                <Cards src='https://www.petsfactory.pk/assets/PostImage/African-Grey-Parrot-And-Green-Ring-Neck-Chicks-For-Sale-168798_4_26166565_130542674406426_2666491406746844052_n.jpg' title='Green Ringneck' />
                <Cards src='https://www.petsfactory.pk/assets/PostImage/African-Grey-Parrot-And-Green-Ring-Neck-Chicks-For-Sale-168798_4_26166565_130542674406426_2666491406746844052_n.jpg' title='Green Ringneck' />
                <Cards src='https://www.petsfactory.pk/assets/PostImage/African-Grey-Parrot-And-Green-Ring-Neck-Chicks-For-Sale-168798_4_26166565_130542674406426_2666491406746844052_n.jpg' title='Green Ringneck' />
                <Cards src='https://www.petsfactory.pk/assets/PostImage/African-Grey-Parrot-And-Green-Ring-Neck-Chicks-For-Sale-168798_4_26166565_130542674406426_2666491406746844052_n.jpg' title='Green Ringneck' />
            </div>
            <Footer title='Contect:' height='300px' />
        </div>
    );
};

export default Home;