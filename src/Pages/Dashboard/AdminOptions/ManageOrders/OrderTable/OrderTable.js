import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrderTableData from '../OrderTableData/OrderTableData';


const OrderTable = ({orders}) => {
    return (
        <div>
             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                 
                            <TableCell sx={{textAlign:'center'}}>Email</TableCell>
                            <TableCell sx={{ minWidth: 200,textAlign:'center'}}>Name</TableCell>
                            <TableCell sx={{ textAlign:'center' }}>Membership</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Price</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Transaction ID</TableCell>
                            <TableCell sx={{textAlign:'center'}}>Order Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders?.map(order => <OrderTableData
                                key={order._key}
                                order={order}
                            ></OrderTableData>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderTable;