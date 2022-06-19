import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../../images/logo.png';
import useAuth from '../../../../hooks/useAuth';
import useUsers from '../../../../hooks/useUsers';
import UserProfile from '../../../UserInterface/UserProfile/UserProfile/UserProfile';
import { Link } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const MobileNavBar = () => {

    const { user, logout, userfirebase, verifybysendingemail } = useAuth();
    const { users } = useUsers()
    const filterusers = users.filter(userr => userr.email == user?.email);


    // Dropdown for earnmoney

    const [opendropforEarn, setopendropforEarn] = React.useState(false);

    const handeldropen = e => {
        setopendropforEarn(true)
        if (!opendropforEarn) {
            setopendropforEarn(true);
            document.getElementById('droparrow').style.transform = "rotate(180deg)"
        }
        else {
            setopendropforEarn(false);
            document.getElementById('droparrow').style.transform = "rotate(0deg)"
        }
    }
    // Dropdown for ad

    const [opendropforad, setopendropforad] = React.useState(false);

    const handeldropenad = e => {
        setopendropforad(true)
        if (!opendropforad) {
            setopendropforad(true);
            document.getElementById('droparrowad').style.transform = "rotate(180deg)"
        }
        else {
            setopendropforad(false);
            document.getElementById('droparrowad').style.transform = "rotate(0deg)"
        }
    }



    const headers = document.getElementById("mobilemenus");
    const abtns = document.querySelectorAll(".mobilemenu");
    abtns.forEach((e) => {
        e.addEventListener("click", () => {
            headers.querySelector(".mobileactive").classList.remove("mobileactive");
            e.classList.add("mobileactive")
        })
    })


    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
        >
            <div className="usermenumobile">
                {
                    user.email && <div className='useroptions'> <h4>{user.displayName}</h4>

                        {
                            filterusers.map(filteruser => <UserProfile
                                key={filteruser._id}
                                filteruser={filteruser}
                            ></UserProfile>)
                        }


                    </div>
                }
            </div>
            {/* <div className="menuitemlogo">
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div> */}

            <Divider />
            <List id='mobilemenus'>
                <ListItem className='mobilemenu mobileactive' button >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>
                <ListItem className='mobilemenu' button onClick={handeldropen}>
                    <ListItemIcon>
                        <CurrencyExchangeIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Earn Money
                    </ListItemText>
                    <ListItemIcon>
                        <ArrowDropDownIcon id="droparrow" />
                    </ListItemIcon>
                </ListItem>

                {
                    opendropforEarn && <Box>
                        <List>
                            <Link className='dashboard-link' to='/dashboard/paidtoclick'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Paid to click
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            <Link className='dashboard-link' to='/dashboard/videoads'>
                                <ListItem button>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Video ads
                                    </ListItemText>
                                </ListItem>
                            </Link>

                            <Link className='dashboard-link' to='/dashboard/offerwall'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Offer wall
                                    </ListItemText>
                                </ListItem>
                            </Link>

                        </List>
                    </Box>
                }

                <ListItem className='mobilemenu' button onClick={handeldropenad}>
                    <ListItemIcon>
                        <AdUnitsIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Advertiser
                    </ListItemText>
                    <ListItemIcon>
                        <ArrowDropDownIcon id="droparrowad" />
                    </ListItemIcon>
                </ListItem>


                {
                    opendropforad && <Box >
                        <List>
                            <Link className='dashboard-link' to='/dashboard/manageads'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Manage Ads
                                    </ListItemText>
                                </ListItem>
                            </Link>

                            <Link className='dashboard-link' to='/dashboard/createads'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Create Ads
                                    </ListItemText>
                                </ListItem>
                            </Link>

                        </List>
                    </Box>
                }

                <ListItem className='mobilemenu' button >
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText>
                    Forum
                    </ListItemText>
                </ListItem>

                {
                    !user.email && <List>

                        <Link className='dashboard-link' to='/login'>
                            <ListItem button>
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Login
                                </ListItemText>
                            </ListItem>
                        </Link>

                        <Link className='dashboard-link' to='/registration'>
                            <ListItem button>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Register
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                }

            </List>
            <Divider />



        </Box>
    );

    return (
        <div>

            <div className="mobilenav">

            <div className="mobile-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menuicon">
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{color:"#1B1464"}} /></Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>


            </div>














        </div>
    );
};

export default MobileNavBar;