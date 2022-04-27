import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import Hero from '../Hero/Hero';
import Getintouch from '../Getintouch/Getintouch/Getintouch'
import Footer from '../../Shared/Footer/Footer/Footer';
import Pricing from '../../Pricing/Pricing';
import HowToEarnMoney from '../HowToEarnMoney/HowToEarnMoney';
const Home = () => {
    var navbar = document.querySelector('.main-nav')
    console.log(navbar);
    window.onscroll = function () {

        // pageYOffset or scrollY
        if (window.pageYOffset > 0) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    }
    return (
        <div>
            <div id='mainnav' className="main-nav">
                <Navbar></Navbar>
            </div>
            <div id='hidedropoption'>
                <Hero></Hero>
            </div>
            <HowToEarnMoney></HowToEarnMoney>
            <Pricing></Pricing>
            <Getintouch></Getintouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;