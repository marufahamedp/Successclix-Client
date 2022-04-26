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
    const { _id, email, name, userCoverPhoto, profileImg } = filteruser;
    const { users } = useUsers();
    const { profileID } = useParams()
    const { user } = useAuth();
    const Input = styled('input')({
        display: 'none',
    });

    // preview Cover Photo

    const [coverImage, setCoverImage] = useState(null);
    const handelcoverimgupload = e => {
        const file = e.target.files[0];
        var output = document.getElementById('coveroutput');
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
        setCoverImage(file);
    }
    // preview Profile Photo

    const [userProfilePhoto, setUserProfilePhoto] = useState(null);
    const handelProfileimgupload = e => {
        const file = e.target.files[0];
        var output = document.getElementById('profileoutput');
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
        setUserProfilePhoto(file);
    }

    // update cover Photo

    const handleCoverSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
        formData.append('image', coverImage)
        if (coverImage.size > 2000000) {
            console.log("This image cant be upload");
            return;
        }
        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `http://localhost:5000/users/photo`,
                    data: {
                        userCoverPhoto: response.data.data.image.url,
                        email: user.email
                    }
                })
                    .then((res) => {
                        setCoverImage({});
                    })

            })

    }

    // update Profile Photo

    const handleProfileSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
        formData.append('image', userProfilePhoto)
        if (userProfilePhoto.size > 2000000) {
            console.log("This image cant be upload");
            return;
        }
        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `http://localhost:5000/users/photo`,
                    data: {
                        profileImg: response.data.data.image.url,
                        email: user.email
                    }
                })
                    .then((res) => {
                        setUserProfilePhoto({});
                    })

            })

    }

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
                                    {
                                        !coverImage && <img src={userCoverPhoto} alt="" />
                                    }

                                    <img id="coveroutput" />
                                    <div className="cover-img-upload-icon">

                                        <form onSubmit={handleCoverSubmit}>
                                            <Stack>
                                                <label htmlFor="cover-img-upload">
                                                    <Input onChange={handelcoverimgupload} accept="image/*" id="cover-img-upload" type="file" />
                                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                                        <PhotoCamera style={{ color: 'red' }} />
                                                    </IconButton>
                                                </label>
                                            </Stack>
                                            <button type="submit">Upload</button>
                                        </form>
                                    </div>
                                    <div className="profile-img">
                                    {
                                        !userProfilePhoto && <img src={profileImg} alt="" />
                                    }

                                    <img id="profileoutput" />
                                        <div className="profile-img-upload-icon">

                                            <form onSubmit={handleProfileSubmit}>
                                                <Stack>
                                                    <label htmlFor="profile-img-upload">
                                                        <Input onChange={handelProfileimgupload} accept="image/*" id="profile-img-upload" type="file" />
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <PhotoCamera style={{ color: 'red' }} />
                                                        </IconButton>
                                                    </label>
                                                </Stack>
                                                <button type="submit">Upload</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
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