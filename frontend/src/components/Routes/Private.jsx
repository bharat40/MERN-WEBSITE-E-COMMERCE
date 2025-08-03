import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authState";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const PrivateRoute = () => {
    const navigate = useNavigate();
    const [authorize, setAuthorize] = useState(false);
    const [auth, setAuth] = useAuth();
    const [count, setCount] = useState(5);
    useEffect(() => {
        const authCheck = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API}/api/v1/auth/user-auth`, {
                headers: {
                    "Authorization": auth?.token
                }
            });
            if (response.data.success) {
                setAuthorize(true);
            }
            else {
                setAuthorize(false);
            }
        }
        if (auth?.token) {
            authCheck();
        }
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 && toast.error("You are not authorized, Please login!") && navigate('/login');
        return () => clearInterval(interval);
    }, [auth?.token, count, navigate]);

    return authorize ? <Outlet /> : (<div className="text-center flex justify-center items-center font-bold text-3xl h-[620px]">Verifying your access... Please wait...</div>);
};
