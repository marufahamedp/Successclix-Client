import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserProfile from '../../../UserProfile/UserProfile/UserProfile';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const UserNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Container>
                <nav>
                    <div className="logo">
                        <h1>Successclix</h1>
                    </div>
                    <menu>
                        <ul>
                            <li><Link to="/myhome">My Home</Link></li>
                            <li>


                                <p
                                className="dropdown"
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <span>Dashboard</span> <span><ArrowDropDownIcon/></span>
                                </p>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Paid to click</MenuItem>
                                    <MenuItem onClick={handleClose}>Video ads</MenuItem>
                                    <MenuItem onClick={handleClose}>Offer wall
</MenuItem>
                                </Menu>


                            </li>
                            <li><Link to="/login">Advertiser</Link></li>

                        </ul>
                    </menu>
                    <div className="nav-btn">

                        <UserProfile></UserProfile>


                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default UserNavbar;