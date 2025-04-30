import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext)
    return (
        <div className='max-w-sm mx-auto'>
            <p className='text-center mt-10 text-2xl font-bold'>{user.email}</p>
        </div>
    );
};

export default Profile;