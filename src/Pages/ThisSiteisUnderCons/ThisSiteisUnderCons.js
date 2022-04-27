import React from 'react';
import { Link } from 'react-router-dom';

const ThisSiteisUnderCons = () => {
    return (
        <div>
            <div className="underconst">
                <div className="underconstraction-text">
                    <h1>This Dite Is Under Construction</h1>
                </div>
                <div className="underconstraction-text">
                    <Link to='/'><button className="primary-circle-btn">Back To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ThisSiteisUnderCons;