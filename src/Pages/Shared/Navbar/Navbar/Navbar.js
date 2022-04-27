import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import UserProfile from '../../../UserInterface/UserProfile/UserProfile/UserProfile';
import useUsers from '../../../../hooks/useUsers';
import EmailVerify from '../../../Verifyusers/VerifyEmail/EmailVerify';
import logo from '../../../../images/logo.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MobileNavBar from '../MobileNavBar/MobileNavBar';




const Navbar = () => {
    const { user, logout, userfirebase, verifybysendingemail } = useAuth();
    const { users } = useUsers()
    const filterusers = users.filter(userr => userr.email == user?.email);
    const headers = document.getElementById("menus");
    const abtns = document.querySelectorAll(".homedropbtn");
    abtns.forEach((e) => {
        e.addEventListener("click", () => {
            headers.querySelector(".active").classList.remove("active");
            e.classList.add("active")
        })
    })
    return (
        <div>
            {
                userfirebase?.emailVerified === false && <div>
                    <EmailVerify></EmailVerify>
                </div>
            }
            <Container sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div id='menus' className="menus">
                        <div className="generaloption"> <button className="homedropbtn active"><Link to='/'>Home</Link></button></div>
                        <div className="homedropdownem">
                            <button className="homedropbtn"><span>Earn Money</span> <ArrowDropDownIcon id="droparrowearnmoney" /></button>
                            <div id='earnhomedropdowncontent' className="homedropdown-content">
                                <Link to='/'>Paid To Click</Link>
                                <Link to='/'>Video Wall</Link>
                                <Link to='/'>Offer Wall</Link>
                            </div>

                        </div>
                        <div className="adhomedropdown">
                            <button className="homedropbtn"><span>Advertisers</span> <ArrowDropDownIcon id="addroparrow" /></button>

                            <div id='adhomedropdowncontent' className="homedropdown-content">
                                <Link to='/'>Manage Ads</Link>
                                <Link to='/'>Create Ads</Link>
                            </div>

                        </div>
                        <div className="generaloption"> <button className="homedropbtn"><Link to='/foram'>Foram</Link></button></div>

                    </div>

                    {
                        user.email ? <div className='useroptions'> <h4>{user.displayName}</h4>

                            {
                                filterusers.map(filteruser => <UserProfile
                                    key={filteruser._id}
                                    filteruser={filteruser}
                                ></UserProfile>)
                            }


                        </div> : <div className="nav-btn">
                            <Link className="primary-link" to="/login"> <button className="login-btn">Login</button></Link>

                            <Link className="primary-link" to="/registration"><button className="primary-sqr-btn">Register</button></Link>

                        </div>
                    }


                </nav>








            </Container>
            {/* Mobile navbar */}

            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
                <MobileNavBar></MobileNavBar>
            </Box>
        </div>
    );
};

export default Navbar;