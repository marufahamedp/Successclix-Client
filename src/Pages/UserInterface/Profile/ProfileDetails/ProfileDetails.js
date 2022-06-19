import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../../Shared/Footer/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar/Navbar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import useUsers from '../../../../hooks/useUsers';
import useAuth from '../../../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import ProfileBasicInfo from '../ProfileBasicInfo/ProfileBasicInfo/ProfileBasicInfo';
const ProfileDetails = ({ filteruser }) => {
  
    const { _id, email, name, userCoverPhoto, profileImg,nidfronpart, nidbackpart } = filteruser;
    const { users } = useUsers();
    const { profileID } = useParams()
    const { user } = useAuth();
    const Input = styled('input')({
        display: 'none',
    });

    

    return (
        <div>
            <div className="main-nav">
                <Navbar></Navbar>
            </div>

            <Container style={{marginTop:"20px"}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <section className="user-imgs">
                            <div className="center-cover">
                                <div className="cover-img">

                                <img src={userCoverPhoto} alt="" />

                                    <img id="coveroutput" />
                                   
                                    <div className="profile-img">
                                    <img src={profileImg} alt="" />
                                       
                                    </div>

                                </div>
                            </div>


                        </section>
                        <section>
                            <div className="nid">
                                <label htmlFor="">NID Front : </label>
                                <img src={nidfronpart} alt="" />
                            </div>

                            <div className="nid">
                            <label htmlFor="">NID Back : </label>
                                <img src={nidbackpart} alt="" />
                            </div>
                        </section>

                    </Grid>
                    <Grid item xs={12} md={8} className="shadow">
                                 <ProfileBasicInfo
                                 key={filteruser._id}
                                 filteruser={filteruser}
                                 ></ProfileBasicInfo>   
                    </Grid>

                </Grid>


                                    



            </Container>


            <Footer></Footer>
        </div>
    );
};

export default ProfileDetails;