import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';
const ProfileBasicInfo = ({ filteruser }) => {
    const { _id, email, displayName, userCoverPhoto, profileImg, phonenumber, useraddress, country, userdateofbirth, nidfronpart, nidbackpart } = filteruser;
    const [edit, setEdit] = useState(false);
    const { user } = useAuth();
    const handeledit = e => {
        e.preventDefault();
        setEdit(true)
    }
    const handcancleeledit = e => {
        e.preventDefault();
        setEdit(false)
    }
    // preview Cover Photo

    const [coverImage, setCoverImage] = useState(null);
    const handelcoverimgupload = e => {
        const file = e.target.files[0];

        setCoverImage(file);
    }
    // preview Profile Photo

    const [userProfilePhoto, setUserProfilePhoto] = useState(null);
    const handelProfileimgupload = e => {
        const file = e.target.files[0];

        setUserProfilePhoto(file);
    }

    // update cover Photo

    const handleCoverSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
        formData.append('image', coverImage)

        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `https://aqueous-ridge-88057.herokuapp.com/users/photo`,
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

        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `https://aqueous-ridge-88057.herokuapp.com/users/photo`,
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


    // handelchnage name
    const [name, setName] = useState();
    const handelName = (e) => {
        setName(e.target.value);
    }
    const [phone, setPhone] = useState();
    const handelPhone = (e) => {
        setPhone(e.target.value)
    }
    const [dateofbirth, setDateofbirth] = useState();
    const handelDateOfBirth = (e) => {
        setDateofbirth(e.target.value)
    }
    const [address, setAddress] = useState();
    const handelAddress = (e) => {
        setAddress(e.target.value)
    }
    const [nidf, setNIDF] = useState(null);
    const handelnidf = (e) => {
        const file = e.target.files[0];
        setNIDF(file)
    }
    const handelNIDfront = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
        formData.append('image', nidf)

        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `https://aqueous-ridge-88057.herokuapp.com/users`,
                    data: {
                        nidfronpart: response.data.data.image.url,
                        email: user.email
                    }
                })
                    .then((res) => {

                    })

            })
    }
    const [nidb, setNIDB] = useState(null);
    const handelnidb = (e) => {
        const file = e.target.files[0];
        setNIDB(file)
    }
    const handelNIDback = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
        formData.append('image', nidb)

        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `https://aqueous-ridge-88057.herokuapp.com/users`,
                    data: {
                        nidbackpart: response.data.data.image.url,
                        email: user.email
                    }
                })
                    .then((res) => {

                    })

            })
    }

    const [profileCompletion, setprofileCompletion] = useState('');


    const handelc = e => {
        e.preventDefault()
      
        if (displayName?.length > 0  ) {
            setprofileCompletion('10%')
        }
        else if (displayName?.length > 0 && email?.length > 0  ) {
            setprofileCompletion('20%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0  ) {
            setprofileCompletion('30%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0 && country?.length > 0  ) {
            setprofileCompletion('40%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0 && useraddress?.length > 0 && country?.length > 0  ) {
            setprofileCompletion('50%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0 && useraddress?.length > 0 && userdateofbirth?.length > 0  && country?.length > 0  ) {
            setprofileCompletion('60%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0 && useraddress?.length > 0 && userdateofbirth?.length > 0 && profileImg?.length > 0 && country?.length > 0  ) {
            setprofileCompletion('70%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0 && useraddress?.length > 0 && userdateofbirth?.length > 0  && userCoverPhoto?.length > 0 && profileImg?.length > 0 && country?.length > 0  ) {
            setprofileCompletion('80%')
        }
        else if (displayName?.length > 0 && email?.length > 0 && phonenumber?.length > 0 && useraddress?.length > 0 && userdateofbirth?.length > 0 && nidfronpart?.length > 0 && userCoverPhoto?.length > 0 && profileImg?.length > 0 && country?.length > 0  ) {
            setprofileCompletion('90%')
        }
        else {
            setprofileCompletion('100%')
        }
       
        
    }


    // handel profile details

    const handelprofiledetails = (e) => {
        e.preventDefault();
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users`,
            data: {
                displayName: name,
                email: user.email,
                phonenumber: phone,
                useraddress: address,
                userdateofbirth: dateofbirth
            }
        })
            .then((res) => {
                setEdit(false)
            })
    }



    return (
        <div>
            <div className="basic-info-container">
                <div className="binfo-title">
                    <h2>My Profile</h2>
                    {
                        !edit ?  <button onClick={handeledit} className="primary-circle-btn">Edit Profile</button>:<button onClick={handcancleeledit} className="primary-circle-btn">Back</button>
                    }
                   
                    
                </div>
                {/* <button onClick={handelc}>change</button> */}
                <Divider style={{ marginBottom: '20px' }} />
                
                {
                    !edit && <Grid container spacing={2}>
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
                                <small className='secondary-text'>Phone Number: </small>
                                <h3>{phonenumber}</h3>
                                <small className='secondary-text'>Address: </small>
                                <h3>{useraddress}</h3>
                                <small className='secondary-text'>Country: </small>
                                <h3>{country}</h3>
                                <small className='secondary-text'>Date Of Birth: </small>
                                <h3>{userdateofbirth}</h3>

                            </div>
                        </Grid>

                    </Grid>
                }
                {
                    edit && <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <form onSubmit={handelprofiledetails}>
                                <div className="a">
                                    <label htmlFor="displayName">Change Your Full Name : </label> <br />
                                    <input onBlur={handelName} className='inputboxstyle' type="text" defaultValue={displayName} />
                                </div>
                                <div className="a">
                                    <label htmlFor="displayName">Change Your Phone Number : </label> <br />
                                    <input onBlur={handelPhone} className='inputboxstyle' type="text" defaultValue={phonenumber} />
                                </div>
                                <div className="a">
                                    <label htmlFor="displayName">Change Your Address : </label> <br />
                                    <input onBlur={handelAddress} className='inputboxstyle' type="text" defaultValue={useraddress} />
                                </div>
                                <div className="a">
                                    <label htmlFor="displayName">Change Your Date Of Birth : </label> <br />
                                    <input onBlur={handelDateOfBirth} className='inputboxstyle' type="date" defaultValue={userdateofbirth} />
                                </div>
                                <button style={{marginTop:'5px'}} className='primary-sqr-btn' type='submit'>save</button>
                            </form>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="">

                                <form onSubmit={handleCoverSubmit}>
                                    <label htmlFor="">Upload Cover Photo : </label> <br />
                                    <input type="file" onChange={handelcoverimgupload} accept="image/*" name="" id="" />

                                    <button type="submit">Upload</button>
                                </form>
                            </div>
                            <div className="">

                                <form onSubmit={handleProfileSubmit}>
                                    <label htmlFor="">Upload Profile Photo : </label> <br />
                                    <input type="file" onChange={handelProfileimgupload} accept="image/*" name="" id="" />

                                    <button type="submit">Upload</button>
                                </form>
                            </div>
                            <div className="">

                                <form onSubmit={handelNIDfront}>
                                    <label htmlFor="">Upload NID Front Side Photo : </label> <br />
                                    <input type="file" onChange={handelnidf} accept="image/*" name="" id="" />

                                    <button type="submit">Upload</button>
                                </form>
                            </div>
                            <div className="">

                                <form onSubmit={handelNIDback}>
                                    <label htmlFor="">Upload NID Back Side Photo : </label> <br />
                                    <input type="file" onChange={handelnidb} accept="image/*" name="" id="" />

                                    <button type="submit">Upload</button>
                                </form>
                            </div>
                            <Divider style={{ marginBottom: '20px', marginTop: '20px' }} />
                            <div>

                            </div>
                        </Grid>

                    </Grid>
                }






            </div>

        </div>
    );
};

export default ProfileBasicInfo;