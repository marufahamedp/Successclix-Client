import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(()=>{
      fetch(`https://aqueous-ridge-88057.herokuapp.com/users`)
      .then(res=>res.json())
      .then(data=>setUsers(data))
      .finally(() => setSpinner(false));
    }, [users])

    return {
        users,
        spinner
    }
};

export default useUsers;