import { Checkbox, TextField,Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import OrderTable from '../OrderTable/OrderTable';

const Orders = () => {
    
    const [orders, setOrders] = useState([]);
  
    useEffect(()=>{
      fetch(`https://aqueous-ridge-88057.herokuapp.com/getpayment`)
      .then(res=>res.json())
      .then(data=>setOrders(data));
    }, [orders])
    const [queary, setQueary] = useState("");
    const [searchColumns, setSearchColumn] = useState(["email"]);

    function search(rows) {

        return rows?.filter(
            (row) =>
                columns.some(
                    (column) => row[column]?.toString().toLowerCase().indexOf(queary.toLowerCase()) > -1
                )
        );
    }
    const columns = orders[0] && Object.keys(orders[0]);
    return (
        <div>
            <div >
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Search With This Options
                </Typography>
                {
                    columns && columns.map((column) => (
                        <label className='filter-checkbox' htmlFor="">
                            <Checkbox
                                id="" checked={searchColumns.includes(column)}
                                onChange={(e) => {
                                    const checked = searchColumns.includes(column);
                                    setSearchColumn((prev) =>
                                        checked
                                            ? prev.filter((sc) => sc !== column)
                                            : [...prev, column]
                                    )
                                }}
                            />

                            {column}
                        </label>
                    ))
                }
                <TextField sx={{ width: '100%', marginTop: '10px', marginBottom: '20px' }} id="standard-basic" label="Start Typing" variant="standard" onChange={(e) => setQueary(e.target.value)} />

                <div>
                    <OrderTable
                        orders={search(orders)}
                    ></OrderTable>

                </div>

            </div>
        </div>
    );
};

export default Orders;