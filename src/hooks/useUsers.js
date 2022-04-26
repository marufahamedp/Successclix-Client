import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`http://localhost:5000/users`)
      .then(res=>res.json())
      .then(data=>setUsers(data))
      .finally(() => setSpinner(false));
    }, [])

    return {
        users,
        spinner
    }
};

export default useUsers;