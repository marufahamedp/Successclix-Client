import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const UserTableData = ({user}) => {
    const {_id, email, displayName, role, status, membership, country, dateTime, os} =user;
    return (
        <TableRow>
        <TableCell>{_id}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{displayName}</TableCell>
        <TableCell>{role}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{membership}</TableCell>
        <TableCell>{country}</TableCell>
        <TableCell>{dateTime}</TableCell>
        <TableCell>{os}</TableCell>
    </TableRow>
    );
};

export default UserTableData;