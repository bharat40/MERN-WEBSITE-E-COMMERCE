import React from 'react';
import privacy_staff from "../assets/privacy_staff.jpg";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { BiSolidTruck } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";

const Policy = () => {
    return (
        <div className='flex justify-center items-center gap-[70px] h-[620px]'>
            <div>
                <img src={privacy_staff} alt="staff" className='w-[600px] h-[400px]' loading='lazy' />
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-6xl bg-black p-3 text-white text-center'>PRIVACY POLICY</h1>
                <p className='text-2xl font-semibold'>At ECOMMERCE-APP, your satisfaction <br /> and security are our top priorities.</p>
                <ul>
                    <li className='list-disc flex items-center gap-1'><SiGnuprivacyguard /> Privacy: We protect your data and never share it without consent.</li>
                    <li className='list-disc flex items-center gap-1'><MdPayments /> Payments: All transactions are secure and encrypted.</li>
                    <li className='list-disc flex items-center gap-1'><BiSolidTruck /> Returns: Easy returns within 7 days of delivery.</li>
                    <li className='list-disc flex items-center gap-1'><FaShippingFast /> Shipping: Fast and reliable shipping across all regions.</li>
                </ul>
                <p className='font-semibold'>By using our platform, you agree to our terms of service and privacy policy.</p>
            </div>
        </div>
    )
}

export default Policy
