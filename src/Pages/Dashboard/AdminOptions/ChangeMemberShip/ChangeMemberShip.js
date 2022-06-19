import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import UseAlert from '../UseAlert/UseAlert';


const ChangeMemberShip = ({user}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openalert, setOpenalert] = React.useState(false);
    const [text, setText] = React.useState(user.membership);
    const [success, setSuccess] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlfreemember = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'Free',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To Free');
            })

    };
    const handlgoldmember = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'Gold',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To Gold');
            })
    };
    const handlsilvermember = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'Silver',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To Silver');
            })
    };
    const handlplatinum = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'Platinum',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To Platinum');
            })
    };
    const handlpremium = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'Premium',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To Premium');
            })
    };
    const handlinvestorp1 = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'investorP1',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To investor package 1');
            })
    };
    const handlinvestorp2 = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'investorP2',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To investor package 2');
            })
    };
    const handlinvestorp3 = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'investorP3',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To investor package 3');
            })
    };
    const handlinvestorp4 = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'investorP4',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To investor package 4');
            })
    };
    const handlinvestorp5 = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/membership`,
            data: {
                membership: 'investorP5',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Membership To investor package 5');
            })
    };

    const handleClose = () => {

        setAnchorEl(null);
    };





    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {user.membership}
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => handlfreemember(user.email)}>Free</MenuItem>
                <MenuItem onClick={() => handlgoldmember(user.email)}>Gold</MenuItem>
                <MenuItem onClick={() => handlsilvermember(user.email)}>Silver</MenuItem>
                <MenuItem onClick={() => handlplatinum(user.email)}>Platinum</MenuItem>
                <MenuItem onClick={() => handlpremium(user.email)}>Premium</MenuItem>
                <MenuItem onClick={() => handlinvestorp1(user.email)}>$125 Investor</MenuItem>
                <MenuItem onClick={() => handlinvestorp2(user.email)}>$250 Investor</MenuItem>
                <MenuItem onClick={() => handlinvestorp3(user.email)}>$375 Investor</MenuItem>
                <MenuItem onClick={() => handlinvestorp4(user.email)}>$625 Investor</MenuItem>
                <MenuItem onClick={() => handlinvestorp5(user.email)}>$1250 Investor</MenuItem>
            </Menu>
            {
                success && <UseAlert
                    open={openalert}
                    setOpen={setOpenalert}
                    text={text}
                ></UseAlert>
            }
        </div>
    );
};

export default ChangeMemberShip;