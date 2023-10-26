import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Clientes from "./pages/Clientes"
import Parceiros from "./pages/Parceiros"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    exact
                    path="/empresa"
                    element={<Empresa />}
                />
                <Route
                    exact
                    path="/clientes"
                    element={<Clientes />}
                />
                <Route
                    exact
                    path="/parceiros"
                    element={<Parceiros />}
                />
               
            </Routes>
        </BrowserRouter>
    )
}

export default Router