import React from 'react';
import { Link } from 'react-router-dom';
import underconstraction from '../../images/underconstraction.png'
const ThisSiteisUnderCons = () => {
    return (
        <div>
            
            <div className="underconst">
            <h1>This Site Is Under Construction</h1>
                <img src={underconstraction} alt="" />
                <div className="underconstraction-btn">
                    <Link to='/'><button className="primary-circle-btn">Back To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ThisSiteisUnderCons;