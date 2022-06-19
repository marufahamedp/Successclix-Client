import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ConfirmDeleteLoginHistory from '../ConfirmDeleteLoginHistory/ConfirmDeleteLoginHistory';

const LoginHistory = ({ usershistory }) => {
    const { _id, email, country, dateTime, os, region, timezone, ipaddress, osVersion, browser, ua } = usershistory;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className="loginhistory-cover">
                <div className="logindetails">
                    <div className="osimg">
                        {
                            os === 'Windows' && <i class="fa-brands fa-windows windows"></i>
                        }
                        {
                            os === 'Android' && <i class="fa-brands fa-android android"></i>
                        }
                    </div>
                    <div className="logtexts">
                        <p>{os} {osVersion}, {region}, {country}</p>
                        <p>{browser},{dateTime},{ipaddress}</p>
                        <div className="ua">
                            {ua}
                        </div>
                    </div>



                </div>
                <button className="deleteloginhistorybtn" onClick={handleOpen}>Delete Log</button>
                <ConfirmDeleteLoginHistory
                    _id={_id}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    open={open}
                ></ConfirmDeleteLoginHistory>
            </div>
        </div >
    );
};

export default LoginHistory;