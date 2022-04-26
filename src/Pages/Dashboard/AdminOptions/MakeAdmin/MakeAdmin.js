import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
 
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const onSubmit = data => {
        const email = data.email ;
        const user ={ email }
        fetch('http://localhost:5000/users/admin', {
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
                    reset();
                }
            })
    };

    return (
        <div>
            <Typography sx={{fontWeight:600, textAlign:'center'}} variant="h4">Make an Admin</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    sx={{ width: '100%' }}
                    label="Email"
                    type="email"
                    {...register("email")}
                    variant="standard" />
               <Box sx={{textAlign:'center'}}>
               <Button className="speedButton" sx={{my:3}} type="submit" variant="contained">Make Admin</Button>
               </Box>
            </form>
            {success &&  <Stack spacing={2} sx={{ width: '100%' }}> 
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
       <Alert  sx={{mb:3, width: '100%'}} severity="success">Made Admin successfully!</Alert>
      </Snackbar>
    </Stack>}
        </div>
    );
};

export default MakeAdmin;