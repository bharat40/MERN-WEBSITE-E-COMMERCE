import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    return (
        <div>
            <h2 className='font-bold text-lg text-center'>User Panel</h2>
            <div className='flex flex-col'>
                <NavLink to="/dashboard/user/profile" className="border border-gray-200 text-center w-[250px] p-1 bg-black text-gray-300 hover:bg-gray-700">Profile</NavLink>
                <NavLink to="/dashboard/user/orders" className="border border-gray-200 text-center w-[250px] p-1 bg-black text-gray-300 hover:bg-gray-700">Orders</NavLink>
            </div>
        </div>
    )
}

export default UserMenu
