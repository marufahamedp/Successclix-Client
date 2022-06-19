import { Backdrop, Grid, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useAuth from '../../../../hooks/useAuth';
import usdtqr from '../../../../images/usdtqr.png'
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const GetmoneyWhenUpgrade = () => {
    const { upgradeID } = useParams()
    const [memberships, setmemberships] = useState([]);
    const [transactionid, settransactionid] = useState();
    const [wallet, setwallet] = useState();
    const [spinner, setSpinner] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        fetch(`https://aqueous-ridge-88057.herokuapp.com/services/${upgradeID}`)
            .then(res => res.json())
            .then(data => setmemberships(data))
            .finally(() => setSpinner(false));
    }, [memberships])

    const { membership, price, paytype, service1, service2, service3, service4, service5, buybtn, _id } = memberships;
    const { user } = useAuth()

    const { register, handleSubmit } = useForm();


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    const handeltrans = (e) => {
        settransactionid(e.target.value);
    }
    const orderDetails = {
        membership,
        price,
        name: user.displayName,
        email: user.email,
        membershipid: _id,
        transactionid,
        orderStatus: 'pending'
    }
    const orderDetailsW = {
        membership,
        price,
        name: user.displayName,
        email: user.email,
        membershipid: _id,
        transactionid,
        wallet,
        orderStatus: 'pending'
    }

    const handelwalletaddress = (e) => {
        setwallet(e.target.value)
    }

    const handelConfirmPaymentBD = (e) => {
        e.preventDefault();
        
        axios.post('https://aqueous-ridge-88057.herokuapp.com/getpayment', orderDetails)
        .then(
            setOpen(true)
        )
    }

    const handelConfirmPaymentBDWALLET = (e) => {
        e.preventDefault();
        
        axios.post('https://aqueous-ridge-88057.herokuapp.com/getpayment', orderDetailsW)
        .then(
            setOpen(true)
        )

    }


    return (
        <div>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography sx={{ textAlign: 'center' }} id="transition-modal-title" variant="h6" component="h2">
                            Your order has been placed
                        </Typography>
                        <Typography sx={{ textAlign: 'center', mt: 2 }} id="transition-modal-description">
                            Please wait 24 hours for confirmation.
                            Basicaly we take 2 - 3 hours if your profile is 100% completed otherwise we wait until your profile is completed
                          <br />
                          <b style={{ textAlign: 'center' }}>Please Complete your profile if it was incomplete</b>
                        </Typography>
                       
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'20px'}}>
                            <Link className='confirmorder_profile_btn' to='/'>Complete Profile</Link>
                            <Link className='confirmorder_home_btn' to='/'>Back to Home Page</Link>
                        </div>
                    </Box>
                </Fade>
            </Modal>
            <h2>Upgrade Your Current Pacage</h2>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <form className='upgradeform'>
                        <div>
                            <label htmlFor="packageName">Package Name: </label>
                            <input disabled type='text' defaultValue={membership} id="packageName" {...register("packageName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input disabled type='text' defaultValue={user.displayName} id="name" {...register("name", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input disabled type='email' defaultValue={user.email} id="email" {...register("email", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="packagePrice">Price $: </label>
                            <input disabled type=' number' defaultValue={price} id="packagePrice" {...register("packagePrice", { required: true })} />
                        </div>




                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="makepayments">
                        <p> We recive payment with <b>Tether USDT (TRC20)</b> , <b>Bkash</b>, <b>Roket</b>, <b>Nagad</b></p>

                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="For Bangladesh" {...a11yProps(0)} />
                                    <Tab label="USDT" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <p>
                                    বিকাশ : 01637564112 <br />
                                    নগদ  &nbsp; : 01637564112 <br />
                                    রকেট  : 01676823072<br />
                                </p>
                                <p className="paymentinstractionBD">
                                    উক্ত নাম্বারে টাকা সেন্ড মানি করে আপনার ট্রাঞ্জেকশন আইডিটি লিখুন এবং পেমেন্ট কর্নফার্ম করুন।
                                </p>
                                <input onBlur={handeltrans} placeholder='ট্রাঞ্জেকশন আইডি' className='transbox' type='text' />


                                <button onClick={handelConfirmPaymentBD} className='primary-sqr-btn'>কর্নফার্ম পেমেন্ট</button>


                            </TabPanel>
                            <TabPanel value={value} index={1}>


                                <div className="usdt-qr">
                                    <img src={usdtqr} className='usdtqr' alt="" />
                                </div>

                                <p>
                                    Tether USDT (TRC20) Wallet Address
                                </p>
                                <input type="text" className='transbox' value="TYQuphVRkjvh5B2a7Py6B3GZEhzXiBiYgc" id="myInput" />

                                <input onBlur={handelwalletaddress} placeholder='wallet address' className='transbox' type='text' />


                                <button onClick={handelConfirmPaymentBDWALLET} className='primary-sqr-btn'>Confirm Payment</button>
                            </TabPanel>
                        </Box>

                    </div>
                </Grid>

            </Grid>

        </div>
    );
};

export default GetmoneyWhenUpgrade;