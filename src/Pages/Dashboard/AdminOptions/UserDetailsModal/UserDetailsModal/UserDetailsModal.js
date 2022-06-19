import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChangeStatsuBtn from '../../ChangeStatsuBtn/ChangeStatsuBtn/ChangeStatsuBtn';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ChangeMemberShip from '../../ChangeMemberShip/ChangeMemberShip';
import ChangeNidVerified from '../../ChangeNidVerified/ChangeNidVerified'
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import PrintIcon from '@mui/icons-material/Print';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
    width: 800
};
const UserDetailsModal = ({ user }) => {
    const inputRef = useRef(null);
    const printDocument = () => {
        html2canvas(inputRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    };
    const [open, setopen] = React.useState(false);
    const handleopen = (email) => {
        setopen(true)

    };
    const handelCloseModal = () => setopen(false);

  
    const [openn, setOpenn] = React.useState(false);
    const handleOpenn = () => setOpenn(true);
    const handleClosen = () => setOpenn(false);

    const [opennb, setOpennb] = React.useState(false);
    const handleOpennb = () => setOpennb(true);
    const handleClosenb = () => setOpennb(false);

    const handelnidf = e => {
        setOpenn(true);
     
    }
    const handelnidb = e => {
        setOpennb(true)
    }


    return (
        <div>
           <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openn}
                onClose={handleClosen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openn}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            NID Front Part
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <div className="nid">
                                <img src={user.nidfronpart} alt="" />
                            </div>
                        </Typography>
                      
                    </Box>
                </Fade>
            </Modal> 
            
          <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={opennb}
                onClose={handleClosenb}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={opennb}>
                    <Box sx={style}>
                    
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            NID Back Part
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <div className="nid">
                                <img src={user.nidbackpart} alt="" />
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
            <Button onClick={() => handleopen(user.email)}><EditIcon /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handelCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <Box sx={style} classNmae='userdetailmodal' id="divToPrint" ref={inputRef}>
                        <Button onClick={printDocument}>
                            <PrintIcon />
                        </Button>



                        <div>


                            <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    !user.profileImg ? <div className="userImg">
                                        <AccountCircleIcon className="accountcircleicon" />
                                    </div> : <div className="userImg">
                                        <img src={user.profileImg} alt="" />
                                    </div>
                                }

                            </Box>
                            <Typography sx={{ textAlign: 'center', marginBottom: '30px' }} id="transition-modal-title" variant="h6" component="h2">
                                {user.displayName}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} className='userdetailmodalgrid'>
                                    <div>
                                        <label htmlFor="">Email : </label>
                                        <span>{user.email}</span>
                                    </div>
                                    <div className='userrole'>
                                        <label htmlFor="">Role : </label>
                                        <span>

                                            <MakeAdmin
                                                key={user._id}
                                                user={user}
                                            ></MakeAdmin>

                                        </span>
                                    </div>
                                    <div className='userstatus'>
                                        <label htmlFor="">Status : </label>
                                        <span> <ChangeStatsuBtn
                                            key={user._id}
                                            user={user}

                                        ></ChangeStatsuBtn></span>
                                    </div>
                                    <div className='usermembership'>
                                        <label htmlFor="">Membership : </label>
                                        <span>
                                            <ChangeMemberShip
                                                key={user._id}
                                                user={user}
                                            ></ChangeMemberShip>
                                        </span>
                                    </div>
                                    <div>
                                        <label htmlFor="">Country : </label>
                                        <span>{user.country}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">City : </label>
                                        <span>{user.city}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">Region : </label>
                                        <span>{user.region}</span>
                                    </div>
                                    <div className='usermembership'>
                                        <label htmlFor="">NID Verification : </label>
                                        <span>
                                            <ChangeNidVerified
                                                key={user._id}
                                                user={user}
                                            ></ChangeNidVerified>
                                        </span>
                                    </div>
                                    <div className='usermembership'>
                                        <label htmlFor="">NID Photos : </label>
                                        <Button onClick={handelnidf}>NID Front Part</Button>
                                        <Button onClick={handelnidb}>NID Back Part</Button>
                                    </div>
                                    <div>
                                        <label htmlFor="">Registration Date And Time : </label>
                                        <span>{user.dateTime}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">Time Zone : </label>
                                        <span>{user.timezone}</span>
                                    </div>

                                </Grid>
                                <Grid item xs={12} md={6} className='userdetailmodalgrid'>

                                    <div>
                                        <label htmlFor="">Ip Address : </label>
                                        <span>{user.ipaddress}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">ORG : </label>
                                        <span>{user.org}</span>
                                    </div>

                                    <div>
                                        <label htmlFor="">OS : </label>
                                        <span>{user.os}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">OS Version : </label>
                                        <span>{user.osVersion}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">Browser : </label>
                                        <span>{user.browser}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">Browser Version : </label>
                                        <span>{user.browserVersion}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">Engine : </label>
                                        <span>{user.engine}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">CPU : </label>
                                        <span>{user.cpu}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">UA : </label>
                                        <span>{user.ua}</span>
                                    </div>
                                    <div>
                                        <label htmlFor="">LOC : </label>
                                        <span>{user.loc}</span>
                                    </div>

                                </Grid>

                            </Grid>


                        </div>


                    </Box>

                </Fade>
            </Modal>
        </div>
    );
};

export default UserDetailsModal;