import { Container } from '@material-ui/core';
import React from 'react';

const HowToEarnMoney = () => {
    return (
        <div className='howtoearnmoney'>
           <Container>
                <div className="a">
                <div className="howtoearnmoney-grid">
                    <div className="howtoearnmoney-grid-card">
                        <div className="howtoearnmoney-grid-icon">
                        <i class="fa-solid fa-computer-mouse"></i>
                        </div>
                        <div className="howtoearnmoney-grid-text">
                            <h3>CLICK ADS</h3>
                            <p>Click on ads and get paid up to 0.01$ each. Up to 100% referral earnings.</p>
                        </div>
                    </div>
                    <div className="howtoearnmoney-grid-card">
                        <div className="howtoearnmoney-grid-icon">
                        <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="howtoearnmoney-grid-text">
                            <h3>EARN MONEY</h3>
                            <p>You can earn by clicking ads, completing offers and referring new members.</p>
                        </div>
                    </div>
                    <div className="howtoearnmoney-grid-card">
                        <div className="howtoearnmoney-grid-icon">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                        </div>
                        <div className="howtoearnmoney-grid-text">
                            <h3>CASHOUT</h3>
                            <p>You can Cashout to BTC, LTC, Tron, USDT, Bkash, Roket, Nagad, Payneer Account. The Minimum Cashout is just $1</p>
                        </div>
                    </div>
                </div>
                </div>
           </Container>
        </div>
    );
};

export default HowToEarnMoney;