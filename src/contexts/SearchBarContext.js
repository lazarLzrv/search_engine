import React, { createContext, useState } from "react";

export const SearchBarContext = createContext();

export const SearchBarProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <SearchBarContext.Provider value={{ data, setData }}>
            {children}
        </SearchBarContext.Provider>
    );
};
