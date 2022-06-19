import React, { useState } from 'react';
import useUsers from '../../../../../hooks/useUsers';
import UserTable from '../UserTable/UserTable';
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, TextField, Typography } from '@mui/material';
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import PrintIcon from '@mui/icons-material/Print';
const Users = () => {


    const { users } = useUsers();
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
    const columns = users[0] && Object.keys(users[0]);

    // Dropdown for earnmoney

    const [opendropforfilter, setopendropforfilter] = React.useState(false);

    const handeldropen = e => {
        setopendropforfilter(true)
        if (!opendropforfilter) {
            setopendropforfilter(true);
            document.getElementById('droparrow').style.transform = "rotate(180deg)"
        }
        else {
            setopendropforfilter(false);
            document.getElementById('droparrow').style.transform = "rotate(0deg)"
        }
    }


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
                    <UserTable
                        users={search(users)}
                    ></UserTable>

                </div>

            </div>
        </div>
    );
};

export default Users;