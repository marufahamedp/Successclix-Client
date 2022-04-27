import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import headerimg from '../../../images/headerimg.png'
import 'animate.css';

const Hero = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Container>
                <Grid container spacing={2} className="all-in-center">
                    <Grid item xs={12} md={6}>
                        <div className="animate__fadeInLeft">
                            <h1 className="hero-title title" sx={{ fontSize: { xs: '2.813rem' } }}>
                                Earn money by completing simple tasks online.
                            </h1>
                            <p className="hero-slogan secondary-text">
                                Everyone can join, it’s absolutely FREE!
                            </p>
                            {
                                !user.email && <Link className="primary-link mright" to="/registration"><button className="primary-circle-btn">Join Now</button></Link>
                            }

                            <Link className="primary-link" to="/"><button className="secondary-btn">Learn More</button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="hero-img">
                            <img src={headerimg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Hero;