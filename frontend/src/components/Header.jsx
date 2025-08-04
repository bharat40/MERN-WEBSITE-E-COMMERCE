import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiShopee } from "react-icons/si";
import { useAuth } from '../context/authState';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [active, setActive] = useState("home");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = () => {
        setIsOpen(false);
        setLoading(true);
        setAuth({
            ...auth,
            user: null,
            token: ""
        });
        localStorage.removeItem("auth");
        setLoading(false);
        toast.success("Logout successfully");
        navigate('/');
    }
    return (
        <nav className='flex justify-center items-center gap-[700px] p-2 bg-gray-950 text-white'>
            <span className='flex items-center gap-1'> <SiShopee className='text-lg' /> ECOMMERCE-APP</span>
            <ul className='flex gap-[30px]'>
                <NavLink to="/" onClick={() => setActive("home")} className={`${active === "home" ? "border-b" : ""}`}>HOME</NavLink>
                <NavLink to="/category" onClick={() => setActive("category")} className={`${active === "category" ? "border-b" : ""}`}>CATEGORY</NavLink>
                <NavLink to="/cart" onClick={() => setActive("cart")} className={`${active === "cart" ? "border-b" : ""}`}>CART</NavLink>
                {
                    !auth.user ? (<><NavLink to="/register" onClick={() => setActive("register")} className={`${active === "register" ? "border-b" : ""}`}>REGISTER</NavLink>
                        <NavLink to="/login" onClick={() => setActive("login")} className={`${active === "login" ? "border-b" : ""}`}>LOGIN</NavLink></>) : (
                        <div className='relative'>
                            <button onClick={() => setIsOpen(!isOpen)} className='flex gap-1 cursor-pointer'><MdAccountCircle className='text-2xl ' />Hi {auth.user.name}</button>
                            {
                                isOpen && (
                                    <div className='absolute flex flex-col bg-black text-gray-300 w-max p-2'>
                                        <NavLink onClick={() => setIsOpen(false)} to={auth.user.role === true ? "/dashboard/admin" : "/dashboard/user"} className="hover:text-gray-100">Dashboard</NavLink>
                                        <NavLink onClick={() => setIsOpen(false)} to="forgot-password" className="hover:text-gray-100">Reset Password</NavLink>
                                        <NavLink onClick={handleLogout} className={`${active === "logout" ? "border-b" : "hover:text-gray-100 flex gap-2 items-center"}`}>{loading ? "Loading..." : "Logout"}<IoLogOutOutline className='text-lg' /></NavLink>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </ul>
        </nav>
    )
}

export default Header;
