import { createContext, useReducer, useContext } from "react";

export const SearchBarContext = createContext();

const initialState = {
    isOpen: false,
    sugestionsList: null,
    results: [],
    inputValue: "",
};

const WorkoutReducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case "SET_IS_OPEN":
            return { ...state, isOpen: payload };
        case "SET_SUGESTION_LIST":
            return { ...state, sugestionsList: payload };
        case "SET_INPUT_VALUE":
            return { ...state, inputValue: payload };
        case "SET_RESULTS":
            return {
                ...state,
                results: payload,
            };
        default:
            return state;
    }
};

export const useSearchBarContext = () => useContext(SearchBarContext);

export const SearchBarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WorkoutReducer, initialState);

    return (
        <SearchBarContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchBarContext.Provider>
    );
};
