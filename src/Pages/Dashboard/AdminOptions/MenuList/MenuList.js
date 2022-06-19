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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const MenuList = (props) => {

  const { user, logout, userfirebase, verifybysendingemail } = useAuth();
  const { users } = useUsers()
  const filterusers = users.filter(userr => userr.email == user?.email);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  // Dropdown for Advertisers

  const [opendropforadsa, setopendropforadsa] = React.useState(false);

  const handeldropen = e => {
    setopendropforadsa(true)
    if (!opendropforadsa) {
      setopendropforadsa(true);
      document.getElementById('droparrow').style.transform = "rotate(180deg)"
    }
    else {
      setopendropforadsa(false);
      document.getElementById('droparrow').style.transform = "rotate(0deg)"
    }
  }
  // Dropdown for aOffers

  const [opendropforoffera, setopendropforoffera] = React.useState(false);

  const handeldropenoffer = e => {
    setopendropforoffera(true)
    if (!opendropforoffera) {
      setopendropforoffera(true);
      document.getElementById('droparrowoffer').style.transform = "rotate(180deg)"
    }
    else {
      setopendropforoffera(false);
      document.getElementById('droparrowoffer').style.transform = "rotate(0deg)"
    }
  }

  return (
    <div>
      <List>
        <Link className='dashboard-link' to='/dashboard'>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText>
              Dashboard
            </ListItemText>
          </ListItem>
        </Link>
        <Link className='dashboard-link' to='/dashboard/users'>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText>
              Users
            </ListItemText>
          </ListItem>
        </Link>
        <Link className='dashboard-link' to='/dashboard/orders'>
          <ListItem button>
            <ListItemIcon>
              <ManageAccountsIcon/>
            </ListItemIcon>
            <ListItemText>
              Manage Orders
            </ListItemText>
          </ListItem>
        </Link>
        <Link className='dashboard-link' to='/dashboard/makeadmin'>
          <ListItem button>
            <ListItemIcon>
              <AdminPanelSettingsIcon/>
            </ListItemIcon>
            <ListItemText>
              Make Admin
            </ListItemText>
          </ListItem>
        </Link>
   
        <ListItem button onClick={handeldropen}>
          <ListItemIcon>
            <AdUnitsIcon />
          </ListItemIcon>
          <ListItemText>
            Advertisers
          </ListItemText>
          <ListItemIcon>
            <ArrowDropDownIcon id="droparrow" />
          </ListItemIcon>
        </ListItem>

        {
         opendropforadsa && <Box>
            <List>
              <Link className='dashboard-link' to='/dashboard/ptcadsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                   PTC ADS
                  </ListItemText>
                </ListItem>
              </Link>
              <Link className='dashboard-link' to='/dashboard/videoadsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                  Video ADS
                  </ListItemText>
                </ListItem>
              </Link>
              <Link className='dashboard-link' to='/dashboard/textadsa'>
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText>
                    TEXT ADS
                  </ListItemText>
                </ListItem>
              </Link>

              <Link className='dashboard-link' to='/dashboard/linkadsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                    Link ADS
                  </ListItemText>
                </ListItem>
              </Link>
              <Link className='dashboard-link' to='/dashboard/banneradsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                    Banner ADS
                  </ListItemText>
                </ListItem>
              </Link>
              <Link className='dashboard-link' to='/dashboard/ptsuadsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                    PTSU ADS
                  </ListItemText>
                </ListItem>
              </Link>
              <Link className='dashboard-link' to='/dashboard/loginadsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                    Login ADS
                  </ListItemText>
                </ListItem>
              </Link>

            </List>
          </Box>
        }

        <ListItem button onClick={handeldropenoffer}>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText>
            Offer Walls
          </ListItemText>
          <ListItemIcon>
            <ArrowDropDownIcon id="droparrowoffer" />
          </ListItemIcon>
        </ListItem>


        {
          opendropforoffera && <Box >
            <List>
              <Link className='dashboard-link' to='/dashboard/coins4wall'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                    Coins4Wall
                  </ListItemText>
                </ListItem>
              </Link>

              <Link className='dashboard-link' to='/dashboard/cpxresearch'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                    CPX Research
                  </ListItemText>
                </ListItem>
              </Link>
              <Link className='dashboard-link' to='/dashboard/wanaadsa'>
                <ListItem button>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText>
                   Wannads
                  </ListItemText>
                </ListItem>
              </Link>

            </List>
          </Box>
        }


        <Link className='dashboard-link' to='/dashboard/manageorders'>
          <ListItem button>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>
              Orders
            </ListItemText>
          </ListItem>
        </Link>

        <Link className='dashboard-link' to='/dashboard/managedeposits'>
          <ListItem button>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText>
              Deposits
            </ListItemText>
          </ListItem>
        </Link>

        <Link className='dashboard-link' to='/dashboard/managewithdrawals'>
          <ListItem button>
            <ListItemIcon>
              <MoneyOffIcon />
            </ListItemIcon>
            <ListItemText>
              Withdrawals
            </ListItemText>
          </ListItem>
        </Link>




      </List>

    </div>
  );
};

export default MenuList;