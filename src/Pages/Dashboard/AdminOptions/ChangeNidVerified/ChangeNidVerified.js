import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import axios from 'axios';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ChangeNidVerified = ({user}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const [success, setSuccess] = useState(false);
    const [text, setText] = useState(user.nidVerification);

    const handleVerification = email => {

        if (user.nidVerification === 'unverified') {
            axios({
                method: 'put',
                url: `https://aqueous-ridge-88057.herokuapp.com/users/nidverification`,
                data: {
                    nidVerification: 'verified',
                    email: email
                }
            })
                .then((res) => {
                    setSuccess(true);
                    setOpen(true);
                    setText('User Verified Successfully');
                })
        }
    
       else {
            axios({
                method: 'put',
                url: `https://aqueous-ridge-88057.herokuapp.com/users/nidverification`,
                data: {
                    nidVerification: 'unverified',
                    email: email
                }
            })
                .then((res) => {
                    setSuccess(true);
                    setOpen(true);
                    setText('User Verified Unsuccessfull');
                })
        }
    }



return (
    <div>
        <Button onClick={(e) => handleVerification(user.email)}>
            {user.nidVerification}
        </Button>
        {success && <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert sx={{ mb: 3, width: '100%' }} severity="success">{text}</Alert>
            </Snackbar>
        </Stack>}
    </div>
);
};

export default ChangeNidVerified;