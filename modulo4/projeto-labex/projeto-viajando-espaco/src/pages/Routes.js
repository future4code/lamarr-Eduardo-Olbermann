import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "./AdminHomePage";
import { ApplicationFormPage } from "./ApplicationFormPage";
import { CreateTripPage } from "./CreateTripPage";
import HomePage  from "./HomePage";
import { ListTrip } from "./ListTrips";
import { LoginPage } from "./LoginPage";
import { TripDetails } from "./TripDetailsPage";

export function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTrip/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/create" element={<TripDetails/>}/>
                <Route path="/admin/trips/:id" element={<CreateTripPage/>}/>
            </Routes>

        </BrowserRouter>
    )
}