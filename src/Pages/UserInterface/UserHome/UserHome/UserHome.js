import React from 'react';
import Footer from '../../../Shared/Footer/Footer/Footer';
import UserNavbar from '../../UserSharedComponent/UserNavbar/UserNavbar/UserNavbar';

const UserHome = () => {
    return (
        <div>
            <div className="main-nav">
                    <UserNavbar></UserNavbar>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default UserHome;