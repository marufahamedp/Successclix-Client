import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import cartoon from '../../../images/cartoon.png';
import mail from '../../../images/icon/mail.png';
import password from '../../../images/icon/password.png';
import google from '../../../images/icon/google.png';
import useAuth from '../../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import logo from '../../../images/logo.png'
import useUsers from '../../../hooks/useUsers'
const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showforget, setShowforget] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loginUser, signInWithGoogle, isLoading, authError, sendPasswordReset } = useAuth();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate);
        sendPasswordReset(data.email)
     
    };
    const handelgoogleSingin = () => {
        signInWithGoogle(location, navigate);
    }

    const handelforget = e => {
        setShowforget(true)
    }

    const logerrors = authError.slice(9);

    const { users } = useUsers()
    const filterusers = users.filter(userr => userr.email == user?.email);
    
    return (
        <div>


            <div className="border-box">
                <div className="container-box">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} className='all-in-center img-box'>
                            {
                                filterusers[0]?.status == "Suspend" && <div>
                                    
                                    <h1>This account is Suspend</h1>

                                </div>
                            }
                       {
                           !filterusers[0]?.status == "Suspend" && <div>
                           <div className='cartoon-img'>
                                  <img src={cartoon} alt="" />
                                  <div>
                                      <h3>Welcome aboard my friend</h3>
                                      <small>
                                          just a couple of clicks and we start
                                      </small>
                                  </div>
                              </div>
                              <div className="img-box-img">
                                  <img src={logo} alt="" />
                              </div>
                           </div>
                       }
                         
                        </Grid>

                        <Grid item xs={12} md={4} className="form-box all-in-center">
                            <div className='form-container'>

                                <h3 className='form-title'>Welcome</h3>

                                {
                                    authError && <div className='autherror'>
                                        <Alert severity="error">{logerrors}</Alert>
                                    </div>
                                }


                                <form onSubmit={handleSubmit(onSubmit)}>


                                    {
                                        showforget && <h3 className='form-title'>Enter Your Email To Reset</h3>
                                    }


                                    <div className="mailbox">
                                        <img src={mail} alt="" />
                                        <input placeholder='Email' type="email" {...register("email")} />

                                    </div>
                                    {errors.emal?.type === 'required' && "Email is required"}

                                    {
                                        !showforget && <div className="passwordbox">
                                            <img src={password} alt="" />
                                            <input placeholder='Password' type="password" {...register("password")} />
                                        </div>
                                    }



                                    {errors.password?.type === 'required' && "Password is required"}

                                    <div className="forgetpass">
                                        <small onClick={handelforget}>
                                            Forget Password?
                                        </small>
                                    </div>


                                    {
                                        showforget && <button type="submit" className="primary-circle-btn loginfrombtn">Send Reset Link</button>
                                    }
                                    {
                                        !showforget && <button type="submit" className="primary-circle-btn loginfrombtn">Login</button>
                                    }


                                </form>
                                <div className="divided-by-or">
                                    <hr /> <p>or</p> <hr />
                                </div>

                                <div className="google-login">
                                    <button onClick={handelgoogleSingin} type="submit" className="secondary-btn loginfrombtn logwithgoogle"><img src={google} alt="" /> <p>Continue With Google</p></button>
                                </div>

                                <div className="have-an-id">
                                    <p>Have no account yet?</p>
                                </div>
                                <Link className="primary-link" to="/registration"><button className="secondary-btn loginfrombtn">Register Now</button></Link>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>






        </div>
    );
};

export default Login;