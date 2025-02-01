import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBarProvider } from "./contexts/SearchBarContext";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";

import "./styles/globals.scss";

function App() {
    return (
        <BrowserRouter>
            <SearchBarProvider>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/search' element={<ResultsPage />} />
                </Routes>
            </SearchBarProvider>
        </BrowserRouter>
    );
}

export default App;
