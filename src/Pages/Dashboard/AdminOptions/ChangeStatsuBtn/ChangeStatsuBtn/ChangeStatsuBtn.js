import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import UseAlert from '../../UseAlert/UseAlert';
const ChangeStatsuBtn = ({ user }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openalert, setOpenalert] = React.useState(false);
    const [text, setText] = React.useState(user.status);
    const [success, setSuccess] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleactive = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/status`,
            data: {
                status: 'Active',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Status To Active');
            })

    };
    const handleinactive = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/status`,
            data: {
                status: 'Inactive',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Status To Inactive');
            })
    };
    const handlesuspend = (email) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/status`,
            data: {
                status: 'Suspend',
                email: email
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set Status To Suspend');
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
                {user.status}
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
                <MenuItem onClick={() => handleactive(user.email)}>Active</MenuItem>
                <MenuItem onClick={() => handleinactive(user.email)}>Inactive</MenuItem>
                <MenuItem onClick={() => handlesuspend(user.email)}>Suspend</MenuItem>
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

export default ChangeStatsuBtn;