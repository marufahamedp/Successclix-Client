import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import specialoffer from '../../../images/specialoffer.png'
import startfromad from '../../../images/startfromad.png'
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const HomeSnackbars = ({ opena, setopena }) => {


  const handleClick = () => {
    setopena(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopena(false);
  };


  return (
    <Stack>

      <Snackbar open={opena} autoHideDuration={6000} onClose={handleClose}>
        <Alert className="startformadimgbg" onClose={handleClose}>
          <div>
          <img className="startformadimg" src={startfromad} alt="" />
         <Link to="/dashboard/upgradeaccount"><button className="invest-btn">Invest Now</button></Link>
          </div>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default HomeSnackbars;