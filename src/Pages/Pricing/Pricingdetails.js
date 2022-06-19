import React from 'react';
import { Link } from 'react-router-dom';

const Pricingdetails = ({membershipss}) => {
    const {membership, price, paytype, service1, service2, service3, service4, service5, buybtn, _id} = membershipss;
    return (
        <div className='p-grid'>
        <div>
            <div className="p-box">
                <div className="p-text">
                    <h3>{membership}</h3>
                    <p><span className="big">{price}</span><p className="small">
                        <p className="dolar">$</p>
                        <p className="text">{paytype}</p>
                    </p></p>
                </div>
                <div className="all-p-text-with-icon">
                    <div className="p-text-with-icon">
                        <div className="icon-circle">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="p-icon-text">
                            <p>{service1}</p>
                        </div>
                    </div>
                    <div className="p-text-with-icon">
                        <div className="icon-circle">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="p-icon-text">
                            <p>{service2}</p>
                        </div>
                    </div>
                    <div className="p-text-with-icon">
                        <div className="icon-circle">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="p-icon-text">
                            <p>{service3}</p>
                        </div>
                    </div>
                    <div className="p-text-with-icon">
                        <div className="icon-circle unavalvable-icon-circle">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="p-icon-text">
                            <p>{service4}</p>
                        </div>
                    </div>
                    <div className="p-text-with-icon">
                        <div className="icon-circle unavalvable-icon-circle">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div className="p-icon-text">
                            <p>{service5}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/dashboard/getmoneyWhenUpgrade/${_id}`}> <button className="primary-sqr-btn">{buybtn}</button></Link>
        </div>

    </div>
    );
};

export default Pricingdetails;