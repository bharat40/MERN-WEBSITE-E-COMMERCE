import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
            <h3 className='font-bold text-lg text-center'>Admin Panel</h3>
            <div className='flex flex-col'>
                <NavLink to="/dashboard/admin/create-product" className="border border-gray-200 text-center w-[250px] p-1 bg-black text-gray-300 hover:bg-gray-700">Create Product</NavLink>
                <NavLink to="/dashboard/admin/create-category" className="border border-gray-200 text-center w-[250px] p-1 bg-black text-gray-300 hover:bg-gray-700">Create Category</NavLink>
                <NavLink to="/dashboard/admin/users" className="border border-gray-200 text-center w-[250px] p-1 bg-black text-gray-300 hover:bg-gray-700">Users</NavLink>
            </div>
        </div>
    )
}

export default AdminMenu
