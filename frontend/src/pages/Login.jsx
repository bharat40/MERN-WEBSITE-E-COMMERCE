import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authState';

const Login = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            setLoading(false);
            toast.error("All fields are required");
            return;
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_API}/api/v1/auth/login`, {
                email, password
            });
            if (response.data.success) {
                toast.success(response.data.message);
                setAuth({
                    ...auth,
                    user: {
                        name: response.data.data.name,
                        email: response.data.data.email,
                        id: response.data.data.id,
                        phone: response.data.data.phone,
                        address: response.data.data.address,
                        role: response.data.data.role
                    },
                    token: response.data.data.token
                })
                localStorage.setItem("auth", JSON.stringify(response.data));
                setLoading(false);
                navigate("/");
            }
            else {
                setLoading(false);
                toast.error(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='flex flex-col justify-center items-center h-[620px] '>
            <h1 className='bg-black text-white p-3 text-2xl mb-5'>LOGIN PAGE</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[400px] p-4 text-black shadow shadow-black'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-b py-2' />
                </div>
                <p onClick={() => navigate('/forgot-password')} className='text-sm cursor-pointer'>Forgot password?</p>
                <button type='submit' className='border p-2 bg-black text-white cursor-pointer transition-colors duration-500'>{loading ? "Loading..." : "Login"}</button>
            </form>
        </div>
    )
}

export default Login
