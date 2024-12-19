import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";

import "./styles/globals.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:slug' element={<ResultsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
