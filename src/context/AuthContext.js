// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import toast from 'react-hot-toast';
import { Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (userEmail, userPassword) => {
        try {
            // const response = await axios.post(BASE_URL+'api/auth/login', { userEmail, userPassword });
            let token
            if (userEmail == "club@gmail.com" && userPassword == "123456789")
            {
                // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJUeXBlIjoiMSIsImlhdCI6MTcxNzEyNjQ5NywiZXhwIjoxNzE4ODU0NDk3fQ.FG29BOeeAn4KCKP9LmxDO_70ptdrqUJBI9pSob0eM3s"
                // localStorage.setItem('jwtToken', token);
                setUser({exp: 1718861288,
                    iat: 1717133288,
                    userName: "Club",
                    userId: 15,
                    userType: "3", 
                });
                
            }
            else if(userEmail == "member@gmail.com"&& userPassword == "123456789")
            {
                // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJ1c2VyVHlwZSI6IjIiLCJpYXQiOjE3MTcxMzE1MTAsImV4cCI6MTcxODg1OTUxMH0.VsKpEX5WaE7j2yhhj5z8nzDei3EDMgS4ZLZEfHfo8p8"
                // localStorage.setItem('jwtToken', token);
                setUser({exp: 1718861288,
                    iat: 1717133288,
                    userName: "Member",
                    userId: 16,
                    userType: "4", // for the below condition fill usertype 1 for admin 2 for cabinet 3 for club 4 for member
                });
            }
            else if(userEmail == "admin@gmail.com"&& userPassword == "123456789")
            {
                // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJ1c2VyVHlwZSI6IjEiLCJpYXQiOjE3MTcxMzE2NTcsImV4cCI6MTcxODg1OTY1N30.9X27H7XufahmgDNvuS2KjKpnBRTDxiQNDQKDwU8pI38"
                // localStorage.setItem('jwtToken', token);
                setUser({exp: 1718861288,
                    iat: 1717133288,
                    userName: "Admin",
                    userId: 18,
                    userType: "1", // for the below condition fill usertype 1 for admin 2 for cabinet 3 for club 4 for member
                });
            }
            else if(userEmail == "cabinet@gmail.com"&& userPassword == "123456789")
            {
                // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJ1c2VyVHlwZSI6IjIiLCJpYXQiOjE3MTcxMzE3OTcsImV4cCI6MTcxODg1OTc5N30.u3Rtfv1If6CgPhFGcqYTo-CGRzMXKVBC1J7LWSHXCGEs"
                // localStorage.setItem('jwtToken', token);
                setUser({exp: 1718861288,
                    iat: 1717133288,
                    userName: "Cabinet",
                    userId: 15,
                    userType: "2", // for the below condition fill usertype 1 for admin 2 for cabinet 3 for club 4 for member
                });
            }
            else{
                throw new Error("Email and password not found")
            }
        }catch(error) {
            //    error.response ? toast.error( "Error : " + error.response.data.message) : toast.error("failed")
            toast.error(error.message)
        
        }
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setUser(jwtDecode(token));
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
