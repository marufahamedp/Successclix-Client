import { Grid } from '@mui/material';
import React from 'react';

const Getintouch = () => {
    return (
        <div>
            <div className="get-in-touch">
                <Grid container spacing={2} className="all-in-center">
                    <Grid item xs={12} md={6} className="all-in-center">
                      <div>
                      <h1 className="git-text title">
                            Get In Touch
                        </h1>
                        <p className="git-detail">
                        Subscribe our newsletter for letest update.
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} className="all-in-center">
                        <div>
                        <div className="git-input-box">
                            <input type="email" />
                            <button className="primary-input-btn">Subscribe </button>
                        </div>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Getintouch;