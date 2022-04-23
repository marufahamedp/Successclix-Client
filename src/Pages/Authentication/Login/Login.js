import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import cartoon from '../../../images/cartoon.png';
import mail from '../../../images/icon/mail.png';
import password from '../../../images/icon/password.png';
import google from '../../../images/icon/google.png';
import useAuth from '../../../hooks/useAuth';
const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const location = useLocation();
    const navigate = useNavigate();



    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const onSubmit = data => {
      loginUser(data.email, data.password, location, navigate);
      console.log(data)
    };
    const handelgoogleSingin = () => {
      signInWithGoogle(location, navigate);
    }
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
                        <Grid item xs={12} md={4} className="form-box all-in-center">
                            <div className='form-container'>

                                <h3 className='form-title'>Welcome</h3>

                                <form onSubmit={handleSubmit(onSubmit)}>





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

                                    <div className="forgetpass">
                                        <small>
                                            <Link to='/'>Forget Password?</Link>
                                        </small>
                                    </div>


                                    <button type="submit" className="primary-circle-btn loginfrombtn">Login</button>


                                    <div className="divided-by-or">
                                        <hr /> <p>or</p> <hr />
                                    </div>

                                    <div className="google-login">
                                    <button onClick={handelgoogleSingin} type="submit" className="secondary-btn loginfrombtn logwithgoogle"><img src={google} alt="" /> <p>Goolge</p></button>
                                    </div>

                                    <div className="have-an-id">
                                        <p>Have no account yet?</p>
                                    </div>
                                    <Link className="primary-link" to="/registration"><button className="secondary-btn loginfrombtn">Register Now</button></Link>
                                </form>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>






        </div>
    );
};

export default Login;