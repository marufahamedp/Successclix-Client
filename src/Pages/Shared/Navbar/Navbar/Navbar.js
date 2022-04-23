import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import UserProfile from '../../../UserInterface/UserProfile/UserProfile/UserProfile';
const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
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
                            <UserProfile></UserProfile>
                            
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