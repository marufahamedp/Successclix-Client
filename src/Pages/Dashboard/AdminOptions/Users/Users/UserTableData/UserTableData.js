import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import UserDetailsModal from '../../../UserDetailsModal/UserDetailsModal/UserDetailsModal';
import useAuth from '../../../../../../hooks/useAuth';
const UserTableData = ({ user }) => {
    const { _id, email, displayName, role, status, membership, country, dateTime, os } = user;

    // change status



    const [openModal, setopenModal] = React.useState(false);
    const handleopenModal = () => setopenModal(true);
    const handleClosemodal = () => setopenModal(false);



    return (
        <TableRow>
            <TableCell>

                <UserDetailsModal
                    key={_id}
                    user={user}
                ></UserDetailsModal></TableCell>
            <TableCell>{_id.slice(0, 6)}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{displayName}</TableCell>
            <TableCell>{role}</TableCell>
            <TableCell>
                {status}
            </TableCell>
            <TableCell>{membership}</TableCell>
            <TableCell>{country}</TableCell>
            <TableCell>{dateTime}</TableCell>
            <TableCell>{os}</TableCell>
        </TableRow>
    );
};

export default UserTableData;