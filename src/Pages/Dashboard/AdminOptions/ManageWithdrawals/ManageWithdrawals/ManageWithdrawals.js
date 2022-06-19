import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ManageWithdrawal from '../ManageWithdrawal/ManageWithdrawal';
const ManageWithdrawals = ({withdraws}) => {

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center' }}>Email</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Ammount</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Withdraw Status</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Date</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Withdraw Method</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Number/Wallet</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            withdraws?.map(withdraw => <ManageWithdrawal
                                key={withdraw._key}
                                withdraw={withdraw}
                            ></ManageWithdrawal>)
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageWithdrawals;