import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import UseAlert from '../../UseAlert/UseAlert';
const ManageWithdrawal = ({withdraw}) => {
    const {date, withdrawammount, email, withdrawstatus, withdrawmethod, number, walletaddress, _id} = withdraw;
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openalert, setOpenalert] = React.useState(false);
    const [text, setText] = React.useState(withdrawstatus);
    const [success, setSuccess] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlpending = (id) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/withdraw/${id}`,
            data: {
                withdrawstatus: 'Pending',
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set withdraw status to pending');
            })

    };

    const handlApproved = (id) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/withdraw/${id}`,
            data: {
                withdrawstatus: 'Approved',
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set withdraw status to approved');
            })

    };

    const handlcancle = (id) => {
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/withdraw/${id}`,
            data: {
                withdrawstatus: 'Cancle',
            }
        })
            .then((res) => {
                setAnchorEl(null);
                setSuccess(true);
                setOpenalert(true);
                setText('Set withdraw status to cancle');
            })

    };
    const handleClose = () => {

        setAnchorEl(null);
    };

    return (
        <TableRow>
            <TableCell sx={{ textAlign: 'center' }}>{email}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{withdrawammount}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
            
            
            <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
               {withdrawstatus}
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
                <MenuItem onClick={() => handlpending(_id)}>Pending</MenuItem>
                <MenuItem onClick={() => handlApproved(_id)}>Approved</MenuItem>
                <MenuItem onClick={() => handlcancle(_id)}>Cancle</MenuItem>
            </Menu>
            {
                success && <UseAlert
                    open={openalert}
                    setOpen={setOpenalert}
                    text={text}
                ></UseAlert>
            }
        </div>
            
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{date}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{withdrawmethod}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{
                number? number:walletaddress
            }</TableCell>
        </TableRow>
    );
};

export default ManageWithdrawal;