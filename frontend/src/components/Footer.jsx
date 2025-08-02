import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-950 flex flex-col items-center text-white p-4'>
            <h1 className='text-xl font-semibold'>All Rights Reserved © ECOMMERCE-APP</h1>
            <div>
                <ul className='text-gray-300'>
                    <NavLink to="/about" className="hover:border-b">About |</NavLink>
                    <NavLink to="/contact" className="hover:border-b"> Contact |</NavLink>
                    <NavLink to="/policy" className="hover:border-b"> Policy</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Footer
