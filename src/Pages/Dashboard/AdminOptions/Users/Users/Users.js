import React, { useState } from 'react';
import useUsers from '../../../../../hooks/useUsers';
import UserTable from '../UserTable/UserTable';


const Users = () => {
    const { users } = useUsers();
    const[queary, setQueary] = useState("");

    function search(rows){
        const columns = rows[0] && Object.keys(rows[0]);
        return rows?.filter(
            (row)=> 
            columns.some(
                (column)=>row[column]?.toString().toLowerCase().indexOf(queary.toLowerCase()) > -1
            )
        );
    }

    return (
        <div>
            
            <input type="text" onChange={(e) => setQueary(e.target.value)} />


            <UserTable
            users={search(users)}
            ></UserTable>

        </div>
    );
};

export default Users;