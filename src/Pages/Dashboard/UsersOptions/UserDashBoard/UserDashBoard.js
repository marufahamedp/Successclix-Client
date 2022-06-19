import { Grid } from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PendingPayment from './PendingPayment';
import PaidHistory from './PaidHistory';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const UserDashBoard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useAuth()
    const [withdrawmethod, setWithdrawmethod] = useState()
    const [withdrawammount, setwithdrawammount] = useState()
    const [walletaddress, setwalletaddress] = useState()
    const [number, setnumber] = useState()

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    console.log(date);
    const handelpaymentoptions = (e) => {
        setWithdrawmethod(e.target.value);
    }

    const handelwithdrawammount = (e) => {
        setwithdrawammount(e.target.value);

    }
    const handelwalletaddress = (e) => {
        setwalletaddress(e.target.value);

    }
    const handelnumber = (e) => {

        setnumber(e.target.value);

    }

    const withdrawData1 = {
        name: user.displayName,
        email: user.email,
        withdrawstatus: "Pending",
        date,
        withdrawammount,
        withdrawmethod,
        number
    }
    const withdrawData2 = {
        name: user.displayName,
        email: user.email,
        withdrawstatus: "Pending",
        date,
        withdrawammount,
        withdrawmethod,
        walletaddress,
    }

    const handelsubmit1 = (e) => {
        e.preventDefault()
        fetch('https://aqueous-ridge-88057.herokuapp.com/withdraw', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(withdrawData1)
        })
            .then(res => {
                setOpen(true)
            })


    }

    const handelsubmit2 = (e) => {
        e.preventDefault()
        fetch('https://aqueous-ridge-88057.herokuapp.com/withdraw', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(withdrawData2)
        })
            .then(res => {
                setOpen(true)
            })
    }
    const [withdraws, setwithdraws] = useState([]);

    React.useEffect(() => {
        fetch(`https://aqueous-ridge-88057.herokuapp.com/withdraw`)
            .then(res => res.json())
            .then(data => setwithdraws(data))

    }, [withdraws])
    const allfilterwithdraws = withdraws.filter(withdraw => withdraw.withdrawstatus == "Pending" || withdraw.withdrawstatus == "Cancle");
    const filterwithdraws = allfilterwithdraws.filter(withdraw => withdraw.email == user.email);

    const allapprovedorcancle = withdraws.filter(withdraw => withdraw.email == user.email);
    const approvedorcancle = allapprovedorcancle.filter(withdraw => withdraw.withdrawstatus == "Approved");

    return (
        <div>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} className="userdahboadholecontent">
                        <div className="boxbg boxbg1">
                            <div>
                                <i class="fa-solid fa-sack-dollar"></i>
                            </div>
                            <div>
                                <p>Total Balance</p>
                                <h2>00$</h2>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="userdahboadholecontent">
                        <div className="boxbg boxbg2">
                            <div>
                                <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            </div>
                            <div>
                                <p>Total Withdraw</p>
                                <h2>00$</h2>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="userdahboadholecontent">
                        <div className="boxbg boxbg3">
                            <div>
                                <i class="fa-solid fa-money-bill-transfer"></i>
                            </div>
                            <div>
                                <p>Total Withdraw</p>
                                <h2>00$</h2>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className="makewithdraw">
                <h2>You must have 1$ for make a withdrawl request.</h2>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <div className="withdrawnow">
                            <div className="header">
                                <h4>Withdraw Now</h4>
                            </div>
                            <form>
                                <label htmlFor="name">Name : </label>
                                <input id='name' defaultValue={user.displayName} type="text" />
                                <label htmlFor="email">Email : </label>
                                <input id='email' defaultValue={user.email} type="email" />
                                <label htmlFor="withdrawammount">Withdraw Ammount : </label>
                                <input onBlur={handelwithdrawammount} id='withdrawammount' type="number" />
                                <label htmlFor="paymentoptions">Payment Options : </label>
                                <select onChange={handelpaymentoptions} id="paymentoptions">
                                    <option value="Select">Select</option>
                                    <option value="Nogod">Nogod</option>
                                    <option value="Bkash">Bkash</option>
                                    <option value="Roket">Roket</option>
                                    <option value="USDT">USDT</option>
                                </select>
                                {
                                    withdrawmethod == "USDT" ? <div>
                                        <label htmlFor="wallet">Wallet Address : </label>
                                        <input onBlur={handelwalletaddress} id='wallet' type="text" />
                                        <button onClick={handelsubmit2} className="withdrawsubmitbtn">
                                            Withdraw Now
                                        </button>
                                    </div> : <div>
                                        <label htmlFor="number">Number : </label>
                                        <input onBlur={handelnumber} id='number' type="text" />
                                        <button onClick={handelsubmit1} className="withdrawsubmitbtn">
                                            Withdraw Now
                                        </button>
                                    </div>
                                }

                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="pending-payments">
                            <div className="header">
                                <h4>Pending Payments</h4>
                            </div>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: 'center' }}>Date</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>Ammount</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>


                                        {
                                            filterwithdraws?.map(withdraw => <PendingPayment
                                                key={withdraw._key}
                                                withdraw={withdraw}
                                            ></PendingPayment>)
                                        }


                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="paid-payments">
                            <div className="header">
                                <h4>Paid History</h4>
                            </div>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: 'center' }}>Date</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>Ammount</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>


                                        {
                                            approvedorcancle?.map(withdraw => <PaidHistory
                                                key={withdraw._key}
                                                withdraw={withdraw}
                                            ></PaidHistory>)
                                        }


                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Grid>

                </Grid>


            </div>

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
                        <div className="okmodal">
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Your withdrawal request should be processed within 2 business days. </p>
                        </div>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default UserDashBoard;