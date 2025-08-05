import React from 'react';
import AdminMenu from '../../components/AdminMenu';

const CreateProduct = () => {
    return (
        <div className='flex justify-center gap-[300px] p-2 h-screen'>
            <div>
                <AdminMenu />
            </div>
            <div className='border h-max p-3 border-gray-300 text-xl mt-7'>
                <h4>Create Product Page</h4>
            </div>
        </div>
    )
}

export default CreateProduct;
