import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const goToPageHome = () => {
        navigate("/")
    }
    return (
        <>
            <h1>Login</h1>
            <button onClick={goToPageHome}>Home Page</button>
        </>
    )
}

export default LoginPage;