import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import LoginHistory from '../LoginHistory/LoginHistory';

const LoginHistorys = () => {
    

    const { user } = useAuth()
    const [userhistory, setUserhistory] = useState([]);
    useEffect(() => {
        fetch(`https://aqueous-ridge-88057.herokuapp.com/userlogs`)
            .then(res => res.json())
            .then(data => setUserhistory(data))
    }, [userhistory])

    const filteruserhistory = userhistory.filter(userr => userr.email == user?.email);
    

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Last Logins</h3>
            {
                filteruserhistory?.map(usershistory => <LoginHistory
                    key={userhistory._id}
                    usershistory={usershistory}
                ></LoginHistory>)
            }
        </div>
    );
};

export default LoginHistorys;