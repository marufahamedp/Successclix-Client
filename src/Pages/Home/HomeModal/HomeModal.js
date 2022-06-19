import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import specialoffer from '../../../images/specialoffer.png'
import { Link } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
 
    boxShadow: 24,
    p: 4,
  };
  
const HomeModal = ({open, handleOpen, handleClose}) => {
    
    return (
        <div>

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
                <Link to="/dashboard/upgradeaccount">
                <img src={specialoffer} alt="" />
                </Link>
            
            </Box>
          </Fade>
        </Modal>
      </div>
    );
};

export default HomeModal;