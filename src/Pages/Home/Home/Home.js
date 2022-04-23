import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import Hero from '../Hero/Hero';
import Getintouch from '../Getintouch/Getintouch/Getintouch'
import Footer from '../../Shared/Footer/Footer/Footer';
const Home = () => {
    return (
        <div>
                <div className="main-nav">
                    <Navbar></Navbar>
                </div>
                <Hero></Hero>
                <Getintouch></Getintouch>
                <Footer></Footer>
        </div>
    );
};

export default Home;