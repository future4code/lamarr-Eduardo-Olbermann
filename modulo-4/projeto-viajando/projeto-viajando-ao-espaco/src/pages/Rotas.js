import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "./ApplicationFormPage";
import HomePage from './HomePage'
import LoginPage from './LoginPage'

 const Rotas = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;