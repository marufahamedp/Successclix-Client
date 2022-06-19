import React from 'react';
import useUsers from '../../../../../hooks/useUsers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserTableData from '../Users/UserTableData/UserTableData';
const UserTable = ({ users }) => {







    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{textAlign:'center'}}>Edit</TableCell>
                            <TableCell sx={{textAlign:'center'}}>ID</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Email</TableCell>
                            <TableCell sx={{ minWidth: 200, textAlign:'center' }}>Name</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Role</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Status</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Membership</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Country</TableCell>
                            <TableCell sx={{ minWidth: 200, textAlign:'center' }}>Registerd Date</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Device</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            users?.map(user => <UserTableData
                                key={user._key}
                                user={user}
                            ></UserTableData>)
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserTable;