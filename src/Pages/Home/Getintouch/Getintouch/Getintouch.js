import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Getintouch = () => {
    const [open, setOpen] = React.useState(false);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const [subscribeEmail, setSubscribeEmail] = useState();





    const handelsubscription = e => {
        setSubscribeEmail(e.target.value);
        e.target.value = ''
    }






    const [subscribers, Setsubscribers] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-ridge-88057.herokuapp.com/subscribers`)
            .then(res => res.json())
            .then(data => Setsubscribers(data))
    }, [subscribers])

    const filtersubscribers = subscribers.filter(subscriber => subscriber.subscriberEmail == subscribeEmail);




    const handelsubmitSubscribers = e => {
        e.preventDefault();
        if (filtersubscribers) {
            setOpen(true);
        }
        else {
            axios.post('https://aqueous-ridge-88057.herokuapp.com/subscribers', {
                subscriberEmail: subscribeEmail
            })
                .then(function (response) {
                    setOpen(true);
                })

        }
    }





    return (
        <div>
            <div className="get-in-touch">
                <Grid container spacing={2} className="all-in-center">
                    <Grid item xs={12} md={6} className="all-in-center">
                        <div>
                            <h1 className="git-text title">
                                Get In Touch
                            </h1>
                            <p className="git-detail">
                                Subscribe our newsletter for letest update.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className="all-in-center">
                        <div>
                            <div className="git-input-box">
                                <input onBlur={handelsubscription} type="email" />
                                <button onClick={handelsubmitSubscribers} className="primary-input-btn">Subscribe </button>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    {
                        filtersubscribers ?  <Alert style={{ backgroundColor: 'red' }} onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                      You've already subscribed
                    </Alert>: <Alert style={{ backgroundColor: '#1B1464' }} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        You've subscribed successfully
                    </Alert>
                    }
    
                </Snackbar>
            </Stack>
        </div>
    );
};

export default Getintouch;