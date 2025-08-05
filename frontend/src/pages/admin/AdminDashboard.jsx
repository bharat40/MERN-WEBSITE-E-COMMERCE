import React from 'react'
import AdminMenu from '../../components/AdminMenu.jsx';
import { useAuth } from '../../context/authState.jsx';

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <div className='flex justify-center gap-[300px] p-2 h-screen'>
            <div>
                <AdminMenu />
            </div>
            <div className='border h-max p-3 border-gray-300 text-xl mt-7'>
                <h4>Admin Name: {auth?.user?.name}</h4>
                <h4>Admin Email: {auth?.user?.email}</h4>
                <h4>Admin Phone: {auth?.user?.phone}</h4>
                <h4>Admin Address: {auth?.user?.address}</h4>
            </div>
        </div>
    )
}

export default AdminDashboard;
