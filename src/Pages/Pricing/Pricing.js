import { Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pricingdetails from './Pricingdetails';

const Pricing = () => {
      const [memberships, setmemberships] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://aqueous-ridge-88057.herokuapp.com/services`)
      .then(res=>res.json())
      .then(data=>setmemberships(data))
      .finally(() => setSpinner(false));
    }, [memberships])
    const slicemembershp = memberships.slice(0, 5)
    return (
        <div>
            <Container>
                <div className="pricing-title">
                    <h1>Package Pricing</h1>
                    <p>Unlimited earning with your best package</p>
                </div>
                <div className="pricing-section">
                    <div className='main-p-grid' >
                      {
                          slicemembershp?.map(membership=> <Pricingdetails
                          key={membership._id}
                          membershipss={membership}
                          ></Pricingdetails>)
                      }
                    <div className='p-grid'>
                            <div>
                                <div className="p-box">
                                    <div className="p-text">
                                        <h3>Investor Membership Benefits</h3>
                                        <p><span className="big"></span><p className="small">
                                            <p className="dolar">Start From 125 $</p>
                                            <p className="text" style={{textAlign:'center'}}>only</p>
                                        </p></p>
                                    </div>
                                    <div className="all-p-text-with-icon">
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                                <p>Invest $125, Get 6.5% Profit/Month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Invest $250, Get 7% Profit/Month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Invest $375, Get 8% Profit/Month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Invest $625, Get 9% Profit/Month</p>
                                            </div>
                                        </div>
                                        <div className="p-text-with-icon">
                                            <div className="icon-circle">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div className="p-icon-text">
                                            <p>Invest $1250, Get 10% Profit/Month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/dashboard/investorpacage'> <button className="primary-sqr-btn">Buy Now</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Pricing;