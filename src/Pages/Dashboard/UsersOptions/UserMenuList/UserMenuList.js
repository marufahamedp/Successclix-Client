import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link, Outlet } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import PaidIcon from '@mui/icons-material/Paid';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import useAuth from '../../../../hooks/useAuth';
import useUsers from '../../../../hooks/useUsers';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const UserMenuList = (props) => {

    const { user, logout, userfirebase, verifybysendingemail } = useAuth();
    const { users } = useUsers()
    const filterusers = users.filter(userr => userr.email == user?.email);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



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
    // Dropdown for logs

    const [opendropforlogs, setopendropforlogs] = React.useState(false);

    const handeldropenlogs = e => {
        setopendropforlogs(true)
        if (!opendropforlogs) {
            setopendropforlogs(true);
            document.getElementById('droparrowlogs').style.transform = "rotate(180deg)"
        }
        else {
            setopendropforlogs(false);
            document.getElementById('droparrowlogs').style.transform = "rotate(0deg)"
        }
    }

    return (
        <div>
            <List>
                <Link className='dashboard-link' to='/dashboard'>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Dashboard
                        </ListItemText>
                    </ListItem>
                </Link>
                <ListItem button onClick={handeldropen}>
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

                <ListItem button onClick={handeldropenad}>
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


                <Link className='dashboard-link' to='/dashboard/upgradeaccount'>
                    <ListItem button>
                        <ListItemIcon>
                            <SystemUpdateAltIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Upgrade Account
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link className='dashboard-link' to='/dashboard/addfunds'>
                    <ListItem button>
                        <ListItemIcon>
                            <PaidIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Add Funds
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link className='dashboard-link' to='/dashboard/withdraw'>
                    <ListItem button>
                        <ListItemIcon>
                            <MoneyOffIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Withdraw
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link className='dashboard-link' to='/dashboard/referral'>
                    <ListItem button>
                        <ListItemIcon>
                            <CoPresentIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Referral
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link className='dashboard-link' to='/dashboard/'>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Personal Settings
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link className='dashboard-link' to='/dashboard/managesupport'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <SupportAgentIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Support
                                    </ListItemText>
                                </ListItem>
                            </Link>

                <ListItem button onClick={handeldropenlogs}>
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Logs
                    </ListItemText>
                    <ListItemIcon>
                        <ArrowDropDownIcon id="droparrowlogs" />
                    </ListItemIcon>
                </ListItem>


                {
                    opendropforlogs && <Box >
                        <List>
                            <Link className='dashboard-link' to='/dashboard/orderhistory'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Order History
                                    </ListItemText>
                                </ListItem>
                            </Link>

                            <Link className='dashboard-link' to='/dashboard/deposithistory'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Deposit History
                                    </ListItemText>
                                </ListItem>
                            </Link>

                            <Link className='dashboard-link' to='/dashboard/withdrawhistory'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Withdraw History
                                    </ListItemText>
                                </ListItem>
                            </Link>
                     

                            <Link className='dashboard-link' to='/dashboard/loginhistory'>
                                <ListItem button>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText>
                                        Login History
                                    </ListItemText>
                                </ListItem>
                            </Link>

                        </List>
                    </Box>
                }

            </List>

        </div>
    );
};

export default UserMenuList;