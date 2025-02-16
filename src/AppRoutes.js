import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './routes/Home'
import Login from "./routes/Login";
import Registro from "./routes/Registro";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/Login" />
                <Route element={<Registro />} path="/Registro" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;