import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API}/api/v1/auth/register`, {
                name, email, password, phone, address
            });
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            }
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    return (
        <div className='flex flex-col justify-center items-center h-[620px]'>
            <h1 className='bg-black text-white p-3 text-2xl'>REGISTER PAGE</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[400px] border p-4 bg-black text-gray-100'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder='Enter your phone no' value={phone} onChange={(e) => setPhone(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder='Enter your address' value={address} onChange={(e) => setAddress(e.target.value)} className='border-b py-2' />
                </div>
                <button type='submit' className='bg-white p-2 text-black hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 hover:text-white transition-colors duration-500'>Register</button>
            </form>
        </div>
    )
}

export default Register
