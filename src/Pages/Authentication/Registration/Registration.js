import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import cartoon from '../../../images/cartoon.png';
import mail from '../../../images/icon/mail.png';
import name from '../../../images/icon/name.png';
import country from '../../../images/icon/country.png';
import password from '../../../images/icon/password.png';
import google from '../../../images/icon/google.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {

    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const { registerUser, isLoading, authError, signInWithGoogle } = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        registerUser(data.email, data.password, data.fullname, data.country, navigate);
    };

    const handelgoogleSingin = () => {
        signInWithGoogle(location, navigate);
    }

    const logerrors = authError.slice(9);


    return (
        <div>


            <div className="border-box">
                <div className="container-box">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} className='all-in-center img-box'>
                            <div className='cartoon-img'>
                                <img src={cartoon} alt="" />
                                <div>
                                    <h3>Welcome aboard my friend</h3>
                                    <small>
                                        just a couple of clicks and we start
                                    </small>
                                </div>
                            </div>
                        </Grid>
                        <h2 className="img-box-text">Successclix</h2>
                        <Grid item xs={12} md={4} className="form-box">
                            <div className='form-container'>

                                <h3 className='form-title'>Register Now</h3>

                                {
                                    authError && <div id='autherror' className='autherror'>
                                        <Alert severity="error">{logerrors}</Alert>
                                    </div>
                                }

                                <form onSubmit={handleSubmit(onSubmit)}>





                                    <div className="mailbox">
                                        <img src={name} alt="" />
                                        <input placeholder='Full Name' type="text" {...register("fullname")} />
                                    </div>
                                    {errors.fullname?.type === 'required' && "Full Name is required"}

                                    <div className="mailbox">
                                        <img src={mail} alt="" />
                                        <input placeholder='Email' type="email" {...register("email")} />
                                    </div>
                                    {errors.emal?.type === 'required' && "Email is required"}



                                    <div className="passwordbox">
                                        <img src={password} alt="" />
                                        <input placeholder='Password' type="password" {...register("password")} />
                                    </div>
                                    {errors.password?.type === 'required' && "Password is required"}

                                    <div className="passwordbox">
                                        <img src={country} alt="" />
                                        <input placeholder='Country' type="text" {...register("country")} />
                                    </div>
                                    {errors.country?.type === 'required' && "Country is required"}

















                                    <button type="submit" className="primary-circle-btn loginfrombtn">Register</button>



                                </form>
                                <div className="divided-by-or">
                                    <hr /> <p>or</p> <hr />
                                </div>

                                <div className="google-login">
                                    <button onClick={handelgoogleSingin} type="submit" className="secondary-btn loginfrombtn logwithgoogle"><img src={google} alt="" /> <p>Goolge</p></button>
                                </div>

                                <div className="have-an-id">
                                    <p>Already have an account?</p>
                                </div>
                                <Link className="primary-link" to="/login"><button className="secondary-btn loginfrombtn">Login Now</button></Link>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>






        </div>
    );
};

export default Registration;