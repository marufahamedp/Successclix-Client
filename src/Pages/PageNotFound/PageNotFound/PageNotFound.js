import React from 'react';
import pagenotfound from '../../../images/pagenotfound.png'
import Footer from '../../Shared/Footer/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
const PageNotFound = () => {
    return (

        <div>
            <div className="main-nav">
                <Navbar></Navbar>
            </div>
            <div className='pagenotfound'>
                <img src={pagenotfound} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;