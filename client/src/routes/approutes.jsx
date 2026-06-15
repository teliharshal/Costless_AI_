import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<LandingPage />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

        </Routes>
    );
}

export default AppRoutes;