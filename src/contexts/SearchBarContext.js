import React, { createContext, useState } from "react";

export const SearchBarContext = createContext();

export const SearchBarProvider = ({ children }) => {
    const [state, setState] = useState({
        isOpen: false,
        sugestionsList: null,
        results: [],
        inputValue: "",
    });

    const updateState = (newData) => {
        setState((prevState) => ({
            ...prevState,
            ...newData,
        }));
    };

    return (
        <SearchBarContext.Provider value={{ state, updateState }}>
            {children}
        </SearchBarContext.Provider>
    );
};
