import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
const ProfileBasicInfo = ({filteruser}) => {
    const { _id, email, displayName, userCoverPhoto, profileImg } = filteruser;
    return (
        <div>
            <div className="basic-info-container">
                <div className="binfo-title">
                    <h2>My Profile</h2>
                    <button className="primary-circle-btn">Edit Profile</button>
                </div>

                <Divider style={{marginBottom:'20px'}} />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <div className="binfo-profile">
                            <img src={profileImg} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9}>
                            <div className="user-details">
                                <small className='secondary-text'>Full Name: </small>
                                <h3>{displayName}</h3>
                                <br />
                                <small className='secondary-text'>Email Address: </small>
                                <h3>{email}</h3>

                            </div>
                    </Grid>

                </Grid>





            </div>

        </div>
    );
};

export default ProfileBasicInfo;