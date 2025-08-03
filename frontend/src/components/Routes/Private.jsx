import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authState";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const PrivateRoute = () => {
    const navigate = useNavigate();
    const [authorize, setAuthorize] = useState(false);
    const [auth, setAuth] = useAuth();
    useEffect(() => {
        const authCheck = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API}/api/v1/auth/user-auth`, {
                headers: {
                    "Authorization": auth?.token
                }
            });
            if (response.data.success === true) {
                setAuthorize(true);
            }
            else {
                setAuthorize(false);
                toast.error("You are not authorized to access dashboard");
                navigate('/login');
            }
        }
        if (auth?.token) {
            authCheck();
        }
        else {
            toast.error("You are not authorized to access dashboard");
            navigate('/login');
        }
    }, [auth?.token]);

    return authorize ? <Outlet /> : (<div className="text-center flex justify-center items-center font-bold text-3xl h-[620px]">Verifying your access... Please wait...</div>);
};
