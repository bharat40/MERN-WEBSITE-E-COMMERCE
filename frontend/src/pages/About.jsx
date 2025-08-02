import React from 'react';
import about_staff from "../assets/about_staff.jpg";

const About = () => {
    return (
        <div className='flex justify-center items-center gap-[70px] h-[620px]'>
            <div>
                <img src={about_staff} alt="staff" className='w-[600px] h-[400px]' loading='lazy' />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-6xl bg-black p-3 text-white text-center'>ABOUT US</h1>
                <p className='text-2xl font-semibold'>Welcome to ECOMMERCE-APP <br /> your trusted online shopping destination.</p>
                <p>We offer a smooth, secure, and user-friendly experience with 24/7 support, <br /> fast delivery, and quality products — all in one place.</p>
                <p className='font-semibold'>Thank you for choosing us!</p>
            </div>
        </div>
    )
}

export default About
