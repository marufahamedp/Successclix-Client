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


    const handeladmin = e => {
        const filterusers = users.filter(userr => userr.role == 'admin');
    }




    return (
        <div>
            <button onClick={handeladmin}>admin</button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell sx={{ minWidth: 200 }}>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Membership</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell sx={{ minWidth: 200 }}>Registerd Date</TableCell>
                            <TableCell>Device</TableCell>
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