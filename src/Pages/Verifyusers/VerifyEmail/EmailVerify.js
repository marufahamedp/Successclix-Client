import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close'
import useAuth from '../../../hooks/useAuth';
const EmailVerify = () => {
    const [open, setOpen] = React.useState(true);
    const [openinfo, setOpeninfo] = React.useState(false);
    const { user, logout, userfirebase, verifybysendingemail } = useAuth();
    const handelsendemail = e =>{
        verifybysendingemail(userfirebase);
        setOpeninfo(true)
    }
    return (
     <Box>
            <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                 severity="warning"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                  
                >
                    Your email address has not been verified yet! Please Verify for get access
                    <button className='verifybtn' onClick={handelsendemail}>Verify Now</button>
                </Alert>
            </Collapse>
          
           
        </Box>
        <Box>
        <Collapse in={openinfo}>
                <Alert
                   severity="info"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpeninfo(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                  
                >
                    Your email address has not been verified yet!
                </Alert>
            </Collapse>
          
        </Box>
     </Box>
    );
};

export default EmailVerify;