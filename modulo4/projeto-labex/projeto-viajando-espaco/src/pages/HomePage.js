import React from "react";
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()

    const goToLoginPage=()=>{
        navigate('/login')
    }
    const goToHomePage=()=>{
        navigate('/')
    }


    return (
        <div>
        <p>Home Page</p>
        <button onClick={goToHomePage}>Home</button>
        <button onClick={goToLoginPage}>Login</button>
        </div>
    )
}

export default HomePage;