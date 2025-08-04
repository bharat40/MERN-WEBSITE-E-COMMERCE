import React from "react";
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });
    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth({
                ...auth,
                user: {
                    name: parsedData.data.name,
                    email: parsedData.data.email,
                    id: parsedData.data.id,
                    phone: parsedData.data.phone,
                    address: parsedData.data.address,
                    role: parsedData.data.role
                },
                token: parsedData.data.token
            });
        }
    }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}


// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };