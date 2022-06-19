import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import Hero from '../Hero/Hero';
import Getintouch from '../Getintouch/Getintouch/Getintouch'
import Footer from '../../Shared/Footer/Footer/Footer';
import Pricing from '../../Pricing/Pricing';
import HowToEarnMoney from '../HowToEarnMoney/HowToEarnMoney';
import MobileNavBar from '../../Shared/Navbar/MobileNavBar/MobileNavBar';
import HomeModal from '../HomeModal/HomeModal';
import { Link } from 'react-router-dom';
import HomeSnackbars from '../HomeSnackbars/HomeSnackbars';
const Home = () => {
    var navbar = document.querySelector('.main-nav')
    window.onscroll = function () {

        // pageYOffset or scrollY
        if (window.pageYOffset > 0) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    }


    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        let s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/627deb9c7b967b11798f2480/1g2tu0n9c';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opena, setopena] = React.useState(true);
    return (
        <div>
            <div className='homepmodal'>
                <HomeModal
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                ></HomeModal>
            </div>
        {
            open==false && <div>
            <HomeSnackbars
            opena={opena}
            setopena={setopena}
            ></HomeSnackbars>
        </div>
        }
            

            <div id='mainnav' className="main-nav laptop-nav">
                <Navbar></Navbar>
            </div>
            <div className="main-nav mobile-nav">
                <MobileNavBar></MobileNavBar>
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