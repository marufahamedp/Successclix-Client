import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MakeAdmin = ({ user }) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const [userroles, setUserroles] = useState(user.role)
    const userrole =user.role;

    const handleMakeadmin = email => {
        const user = { email }
       if(userrole ==='General User'){
        fetch('https://aqueous-ridge-88057.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setOpen(true);
                    setUserroles('Admin');
                }
            })
       }
       else{
        axios({
            method: 'put',
            url: `https://aqueous-ridge-88057.herokuapp.com/users/adminpower`,
            data: {
                role: 'General User',
                email: email
            }
        })
            .then((res) => {
                setSuccess(true);
                setOpen(true);
                setUserroles('General User');
            })
       }
    }





    return (
        <div>
            <Button onClick={(e) => handleMakeadmin(user.email)}>
                {user.role}
            </Button>
            {success && <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert sx={{ mb: 3, width: '100%' }} severity="success">Made {userroles} successfully!</Alert>
                </Snackbar>
            </Stack>}
        </div>
    );
};

export default MakeAdmin;