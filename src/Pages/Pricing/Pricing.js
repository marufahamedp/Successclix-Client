import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
            <Container>
                <div className="pricing-title">
                    <h1>Package Pricing</h1>
                    <p>Unlimited earning with your best pacage</p>
                </div>
                <div className="pricing-section">
                    <div className='main-p-grid' >
                        <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Free</h3>
                                        <p><span className="big">0</span><p className="small">
                                            <p className="dolar">$</p>
                                            <p className="text">Per Month</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $0.01 per click</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Max 25 ads per day</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn$7.5 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum ad</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum earning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'> <button className="primary-sqr-btn">Free</button></Link>
                            </div>

                        </div>
                        <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Gold</h3>
                                        <p><span className="big">50</span><p className="small">
                                            <p className="dolar">$</p>
                                            <p className="text">Per Month</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $0.01 per click</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Max 50 ads per day</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $15 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum ad</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum earning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'> <button className="primary-sqr-btn">Buy Now</button></Link>
                            </div>
                        </div>
                        <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Silver</h3>
                                        <p><span className="big">75</span><p className="small">
                                            <p className="dolar">$</p>
                                            <p className="text">Per Month</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn per click $0.01</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Max 75 ads per day</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $22.5 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum ad</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum earning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'> <button className="primary-sqr-btn">Buy Now</button></Link>
                            </div>
                        </div>
                        <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Platinum</h3>
                                        <p><span className="big">100</span><p className="small">
                                            <p className="dolar">$</p>
                                            <p className="text">Per Month</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $0.01 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Max 100 ads per day</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $30 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum ad</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum earning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'> <button className="primary-sqr-btn">Buy Now</button></Link>
                            </div>
                        </div>
                        <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Premium </h3>
                                        <p><span className="big">180</span><p className="small">
                                            <p className="dolar">$</p>
                                            <p className="text">Per Month</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                    <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $0.01 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Max 166 ads per day</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn $50 per month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get maximum earning</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle unavalvable-icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Unable to get max profit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'> <button className="primary-sqr-btn">Buy Now</button></Link>
                            </div>
                        </div>
                        <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Investor Package</h3>
                                        <p><span className="big">115.60</span><p className="small">
                                            <p className="dolar">$</p>
                                            <p className="text">Min Per Month</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Earn 6% profit with $115.60</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Earn 7% profit with $231.19</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Earn 8% profit with $346.79</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Earn 9% profit with $577.98</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Earn 10% profit with $1155.96</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'> <button className="primary-sqr-btn">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Pricing;