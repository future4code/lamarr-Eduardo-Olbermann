import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const goToPageLogin = () => {
        navigate("/login")
    }
    const goToPageApplicationFormPage = () => {
        navigate("/trips/application")
    }
    return (
        <>
            <h1>Página Inicial</h1>
            <button onClick={goToPageApplicationFormPage}>Inscrever-se</button>
            <button onClick={goToPageLogin}>Login</button>
        </>
    )
}

export default HomePage;