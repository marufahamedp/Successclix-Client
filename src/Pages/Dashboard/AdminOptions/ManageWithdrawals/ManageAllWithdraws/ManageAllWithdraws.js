import React, { useEffect, useState } from 'react';
import ManageWithdrawals from '../ManageWithdrawals/ManageWithdrawals';
import { Button, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
const ManageAllWithdraws = () => {
    const [withdraws, setwithdraws] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-ridge-88057.herokuapp.com/withdraw`)
            .then(res => res.json())
            .then(data => setwithdraws(data))

    }, [withdraws])
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
    const columns = withdraws[0] && Object.keys(withdraws[0]);

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
                <ManageWithdrawals
                    withdraws={search(withdraws)}
                ></ManageWithdrawals>

            </div>

        </div>
    </div>
    );
};

export default ManageAllWithdraws;