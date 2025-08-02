import React from 'react';
import contact_staff from "../assets/contact_staff.jpg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";

const Contact = () => {
    return (
        <div className='flex justify-center items-center gap-[70px] h-[620px]'>
            <div>
                <img src={contact_staff} alt="staff" className='w-[600px] h-[400px]' loading='lazy'/>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-6xl bg-black p-3 text-white text-center'>CONTACT US</h1>
                <p className='text-2xl font-semibold'>🙋We're here to help!</p>
                <p>Our support team is available 24/7 to assist you with any questions, issues, or feedback.</p>
                <div className='flex flex-col gap-1.5'>
                    <span className='flex gap-1 items-center'><FaPhone /> Phone: +1 (800) 123-4567</span>
                    <span className='flex gap-1 items-center'><MdEmail /> Email: support@ecommerce-app.com</span>
                    <span className='flex gap-1 items-center'><IoMdChatboxes /> Live Chat: Available in the bottom-right corner</span>
                </div>
                <p className='font-semibold'>You can also reach out via our Help Center for FAQs, order tracking, and more.</p>
            </div>
        </div>
    )
}

export default Contact
