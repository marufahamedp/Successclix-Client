import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const PendingPayment = ({withdraw}) => {
    const {date, withdrawammount, withdrawstatus} = withdraw;
    return (
        <TableRow>
        <TableCell  sx={{ textAlign: 'center' }}>{date}</TableCell>
        <TableCell  sx={{ textAlign: 'center' }}>{withdrawammount}</TableCell>
        <TableCell sx={{ textAlign: 'center' }}>{withdrawstatus}</TableCell>
    </TableRow>
    );
};

export default PendingPayment;