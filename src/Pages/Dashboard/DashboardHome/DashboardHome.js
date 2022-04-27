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
import UserProfile from '../../UserInterface/UserProfile/UserProfile/UserProfile';
import useUsers from '../../../hooks/useUsers';
import useAuth from '../../../hooks/useAuth';
import MenuList from '../AdminOptions/MenuList/MenuList';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import PaidIcon from '@mui/icons-material/Paid';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import UserMenuList from '../UsersOptions/UserMenuList/UserMenuList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const drawerWidth = 250;

const DashboardHome = (props) => {
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


    const drawer = (
        <div className='dashboarddrawer'>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="dashboard-logo">
                    <Link to='/'>
                        <h2>Successclix</h2>
                    </Link>
                </div>
            </Toolbar>
            <Divider />

        <MenuList></MenuList>

            <Divider />
           

        <UserMenuList></UserMenuList>
               

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                    className="userdashbordnav"

                >
                    <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ color: '#6956E5' }} />
                        </IconButton>
                        <Box style={{ width: '100%' }}>
                            <div className="dashboard-nav">
                                <div className="welcomeusers">
                                    <h3>Welcome {user.displayName}</h3>
                                    <small>Hope you have a good day</small>
                                </div>
                                <div className="dashboard-users-options">
                                    {
                                        filterusers.map(filteruser => <UserProfile
                                            key={filteruser._id}
                                            filteruser={filteruser}
                                        ></UserProfile>)
                                    }
                                </div>
                            </div>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    <Outlet></Outlet>
                </Box>
            </Box>
        </div>
    );
};

export default DashboardHome;