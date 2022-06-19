import React, { useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    borderRadious: '20px',
    boxShadow: 24,
    p: 4,

};
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const OrderTableData = ({ order }) => {
    const { _id, email, name, membership, price, membershipid, transactionid, orderStatus } = order;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [opena, setOpena] = React.useState(false);


    const handleClicka = () => {
        setOpena(true);
    };

    const handleClosea = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpena(false);
    };




    const handelDelete = id => {

        const url = `https://aqueous-ridge-88057.herokuapp.com/getpayment/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setOpen(false);
                    setOpena(true);
                }
            })


    }

    const handelconfirmorders = (id) => {
        if (orderStatus == 'pending') {
            axios({
                method: 'put',
                url: `https://aqueous-ridge-88057.herokuapp.com/getpayment/${id}`,
                data: {
                    orderStatus: 'approved'
                }
            })
                .then((res) => {
                    setOpena(true);
                    setOpen(false);
                })
               
        }
        else {
            axios({
                method: 'put',
                url: `https://aqueous-ridge-88057.herokuapp.com/getpayment/${id}`,
                data: {
                    orderStatus: 'pending'
                }
            })
                .then((res) => {
                    setOpena(true);
                    setOpen(false);
                
                })
               
        }
    }



    return (
        <TableRow>

            <TableCell sx={{ textAlign: 'center' }}>{email}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{name}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{membership}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
                {price}
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>{transactionid}</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
                <div>
                    <Button onClick={handleOpen}>  {orderStatus}</Button>
               
                    {
                        orderStatus == "pending" ? <Modal
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
                                        Confirm This Order?
                                    </Typography>
                                    <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                                        Do you sure you want to confirm this order?
                                    </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }} className="confirm-order">
                                        <Button onClick={() => handelDelete(_id)} variant="contained" color="error">Delete This Order</Button>
                                        <Button onClick={() => handelconfirmorders(_id)} variant="contained" color="success">Confirm This Order</Button>
                                    </div>
                                </Box>
                            </Fade>
                        </Modal> : <Modal
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
                                        Make order status pending?
                                    </Typography>
                                    <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                                        Do you sure you want to make this order to pending status?
                                    </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }} className="confirm-order">
                                        <Button onClick={() => handelDelete(_id)} variant="contained" color="error">Delete This Order</Button>
                                        <Button onClick={() => handelconfirmorders(_id)} variant="contained" color="success">Make Pending</Button>
                                    </div>
                                </Box>
                            </Fade>
                        </Modal>
                    }


                </div>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={opena} autoHideDuration={6000} onClose={handleClosea}>
                        <Alert onClose={handleClosea} severity="success" sx={{ width: '100%' }}>
                            Action completed successfully
                        </Alert>
                    </Snackbar>
                </Stack>
            </TableCell>
        </TableRow>
    );
};

export default OrderTableData;