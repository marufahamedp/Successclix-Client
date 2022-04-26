import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../../Shared/Footer/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar/Navbar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import cover from '../../../../images/cover.png'
import axios from 'axios';
import useUsers from '../../../../hooks/useUsers';
import useAuth from '../../../../hooks/useAuth';
import ProfileDetails from '../ProfileDetails/ProfileDetails';


const Profile = () => {
    const { users } = useUsers();
    const { user } = useAuth();
    const filterusers = users.filter(userr => userr.email == user?.email)

    return (
        <div>
            {
                filterusers.map(filteruser => <ProfileDetails
                    key={filteruser._id}
                    filteruser={filteruser}
                ></ProfileDetails>)
            }
        </div>
    );
};

export default Profile;