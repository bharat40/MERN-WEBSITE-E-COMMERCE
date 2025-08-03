import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiShopee } from "react-icons/si";
import { useAuth } from '../context/authState';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [active, setActive] = useState("home");
    const [loading, setLoading] = useState(false);
    const handleLogout = () => {
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
                {
                    !auth.user ? (<><NavLink to="/register" onClick={() => setActive("register")} className={`${active === "register" ? "border-b" : ""}`}>REGISTER</NavLink>
                        <NavLink to="/login" onClick={() => setActive("login")} className={`${active === "login" ? "border-b" : ""}`}>LOGIN</NavLink></>) : (
                        <><NavLink onClick={handleLogout} className={`${active === "logout" ? "border-b" : ""}`}>{loading ? "Loading..." : "LOGOUT"}</NavLink></>
                    )
                }
                <NavLink to="/cart" onClick={() => setActive("cart")} className={`${active === "cart" ? "border-b" : ""}`}>CART</NavLink>
            </ul>
        </nav>
    )
}

export default Header;
