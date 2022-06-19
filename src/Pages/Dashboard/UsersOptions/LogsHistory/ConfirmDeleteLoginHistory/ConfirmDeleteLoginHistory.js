import React, { useState } from 'react';
import { styled, Box, borderRadius } from '@mui/system';
import { ModalUnstyled } from '@mui/base';
import { Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ConfirmDeleteLoginHistory = ({ open, handleClose, handleOpen, _id }) => {
    const [opena, setOpena] = React.useState(false);


    const handleClosea = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpena(false);
    };
    const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

    const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

    const style = {
        maxWidth: 500,
        p: 2,
        px: 4,
        pb: 3,
        backgroundColor: 'white',
        borderRadius: '10px'
    };


    const handelDelete = id => {
        const url = `https://aqueous-ridge-88057.herokuapp.com/userlogs/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setOpena(true);
                }
            })
    }
    return (
        <div>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <Box sx={{ textAlign: 'center' }}>
                        <HighlightOffIcon style={{ fontSize: '80px', color: 'red' }} />
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
                        Are you sure ?
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body1">
                        Do you really want to delete this login history? This process cannot be undone.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <button sx={{ mx: 1, my: 1 }} className="modalcloseBtn" onClick={handleClose} >Cancel</button>
                        <button sx={{ mx: 1, my: 1 }} className="modalbtn" variant="contained" onClick={() => handelDelete(_id)} >Delete</button>

                    </Box>
                </Box>
            </StyledModal>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={opena} autoHideDuration={3000} onClose={handleClosea}>
                    <Box>
                        <Alert onClose={handleClosea} severity="error" sx={{ width: '100%', }}>
                            Login History Successfully Deleted
                        </Alert>
                    </Box>
                </Snackbar>
            </Stack>
        </div>
    );
};

export default ConfirmDeleteLoginHistory;