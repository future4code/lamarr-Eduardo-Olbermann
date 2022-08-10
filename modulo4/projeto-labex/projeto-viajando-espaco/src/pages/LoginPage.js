import React from "react";
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
const navigate = useNavigate()
const goToHome=()=>{
    navigate('/')
} 

return (
    <div>
        <p>Login Page</p>
        <button onClick={goToHome}>Home</button>  
    </div>
    )
}