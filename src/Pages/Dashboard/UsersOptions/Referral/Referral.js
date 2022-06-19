import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useUsers from '../../../../hooks/useUsers'
const Referral = () => {
    const {users} = useUsers()
    const {user} = useAuth()
   
    const filterusers = users.filter(userr => userr.email == user?.email);
    return (
        <div>
            {
                filterusers?.map(user=> <div>
                        {user.displayName}

                        

                        <input type="text" value={user.displayName} />

                </div>)
            }
        </div>
    );
};

export default Referral;