import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API}/api/v1/auth/forgot-password`, {
                email,
                newPassword,
                securityQuestion
            });
            if (response.data.success) {
                setLoading(false);
                toast.success(response.data.message);
                navigate('/login');
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='flex flex-col justify-center items-center h-[620px] '>
            <h1 className='bg-black text-white p-3 text-2xl mb-5'>RESET PASSWORD</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[400px] p-4 text-black shadow shadow-black'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="securityQuestion">Security Question <span className='text-sm text-red-400'>(What's your pet name?)</span></label>
                    <input type="text" name="securityQuestion" id="securityQuestion" placeholder='Enter your answer' value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)} className='border-b py-2' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">New Password</label>
                    <input type="password" name="newPassword" id="newPassword" placeholder='Enter new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='border-b py-2' />
                </div>
                <button type='submit' className='border p-2 bg-black text-white cursor-pointer transition-colors duration-500'>{loading ? "Loading..." : "Reset"}</button>
            </form>
        </div>
    )
}

export default ForgotPassword
