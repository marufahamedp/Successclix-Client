import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import UserProfile from '../../../UserInterface/UserProfile/UserProfile/UserProfile';
import useUsers from '../../../../hooks/useUsers';
import EmailVerify from '../../../Verifyusers/VerifyEmail/EmailVerify';

const Navbar = () => {
    const { user, logout, userfirebase, verifybysendingemail } = useAuth();
    const {users} = useUsers()

  
   
    const filterusers = users.filter(userr => userr.email == user?.email);

    return (
        <div>
            {
                userfirebase?.emailVerified === false && <div>
                   <EmailVerify></EmailVerify>
                </div> 
            }
            <Container>
                
              
                <nav>
                    <div className="logo">
                        <h1>Successclix</h1>
                    </div>
                    <menu>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/registration">Registration</Link></li>
                        </ul>
                    </menu>

                    {
                        user.email ? <div className='useroptions'> <h4>{user.displayName}</h4>

                            {
                                filterusers.map(filteruser=>  <UserProfile
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
        </div>
    );
};

export default Navbar;