import { Grid, unstable_createMuiStrictModeTheme } from '@material-ui/core';
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
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import useUsers from '../../../../hooks/useUsers';
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

const Investorpacage = () => {
    const { upgradeID } = useParams()
    const [memberships, setmemberships] = useState([]);
    const [transactionid, settransactionid] = useState();
    const [wallet, setwallet] = useState();
    const [spinner, setSpinner] = useState(true);
    const [packages, setpackages] = useState("Invest $125, Get 6.5% Profit/Month");
    const [prices, setprices] = useState(125);
    const [membershipID, setmembershipID] = useState('A125');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {users} = useUsers()
    const filterusers = users.filter(userr => userr.email == user?.email);
    console.log(filterusers);
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

    const handelsetpackages = e => {
        setpackages(e.target.value);

        if (e.target.value === "Invest $125, Get 6.5% Profit/Month") {
            setprices(125);
            setmembershipID("A125");
        }
        if (e.target.value === "Invest $250, Get 7% Profit/Month") {
            setprices(250);
            setmembershipID("A250");
        }
        if (e.target.value === "Invest $375, Get 8% Profit/Month") {
            setprices(375);
            setmembershipID("A375");
        }
        if (e.target.value === "Invest $625, Get 9% Profit/Month") {
            setprices(625);
            setmembershipID("A625");
        }
        if (e.target.value === "Invest $1250, Get 10% Profit/Month") {
            setprices(1250);
            setmembershipID("A1250");
        }
        e.target.value="";
    }




    const handeltrans = (e) => {
        settransactionid(e.target.value);
        e.target.value="";
    }
    const orderDetails = {
        membership: packages,
        price: prices,
        name: user.displayName,
        email: user.email,
        membershipid: membershipID,
        transactionid,
        orderStatus: 'pending'
    }
    const orderDetailsW = {
        membership: packages,
        price: prices,
        name: user.displayName,
        email: user.email,
        membershipid: membershipID,
        transactionid,
        wallet,
        orderStatus: 'pending'
    }

    const handelwalletaddress = (e) => {
        setwallet(e.target.value);
        e.target.value="";
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
            <Button onClick={handleOpen}>Open modal</Button>
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
            <h2>Upgrade Your Current package</h2>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <form className='upgradeform'>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Select package
                                </InputLabel>
                                <NativeSelect
                                    onChange={handelsetpackages}

                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value="Invest $125, Get 6.5% Profit/Month">Invest $125, Get 6.5% Profit/Month</option>
                                    <option value="Invest $250, Get 7% Profit/Month">Invest $250, Get 7% Profit/Month</option>
                                    <option value="Invest $375, Get 8% Profit/Month">Invest $375, Get 8% Profit/Month</option>
                                    <option value="Invest $625, Get 9% Profit/Month">Invest $625, Get 9% Profit/Month</option>
                                    <option value="Invest $1250, Get 10% Profit/Month">Invest $1250, Get 10% Profit/Month</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                        <div>
                            <label htmlFor="packageName">Package Name: </label>
                            {packages}
                        </div>
                        <div>
                            <label htmlFor="name">Name: </label>
                            {user.displayName}
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            {user.email}
                        </div>
                        <div>
                            <label htmlFor="packagePrice">Price $: </label>
                            {prices}
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

export default Investorpacage;