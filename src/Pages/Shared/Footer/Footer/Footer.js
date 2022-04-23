import { Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../../images/icon/facebook.png'
import instragram from '../../../../images/icon/instagram.png'
import twitter from '../../../../images/icon/twitter.png'
const Footer = () => {
    return (
        <div>
           <footer>
           <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <h3 className="footer-c">
                            Get In Touch
                        </h3>
                        <p className='footer-details'>
                            Follow us in our social media <br /> and subscribe our newsletter for letest update.
                        </p>
                        <div className="social-icon">
                            <a href="#" target='_blank'> <img src={facebook} alt="" /></a>
                            <a href="#" target='_blank'> <img src={instragram} alt="" /></a>
                            <a href="#" target='_blank'> <img src={twitter} alt="" /></a>
                           
                           
                           
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <h3 className="footer-c">
                    Company info
                        </h3>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Carrier</Link></li>
                            <li><Link to="/">We are hiring</Link></li>
                            <li><Link to="/">Blog</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <h3 className="footer-c">
                    Features
                        </h3>
                        <ul>
                            <li><Link to="/">Business Marketing</Link></li>
                            <li><Link to="/">User Analytic</Link></li>
                            <li><Link to="/">Live Chat</Link></li>
                            <li><Link to="/">Unlimited Support</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <h3 className="footer-c">
                    Resources
                        </h3>
                        <ul>
                            <li><Link to="/">IOS And Android</Link></li>
                            <li><Link to="/">Watch a Demo</Link></li>
                            <li><Link to="/">Customers</Link></li>
                            <li><Link to="/">API</Link></li>
                        </ul>
                    </Grid>

                </Grid>
            </Container>
            <div className="copyright">
                <p>Copyright © 2022 Successclix.com</p>
            </div>
           </footer>
        </div>
    );
};

export default Footer;