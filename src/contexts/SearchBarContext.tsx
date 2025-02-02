import {
    createContext,
    useReducer,
    useContext,
    ReactNode,
    Dispatch,
} from "react";

import { ResultsProps } from "../components/SingleResult";

type SugestionsListProps = {
    id: number;
    title: string;
};

type StateProps = {
    isOpen: boolean;
    sugestionsList: null | SugestionsListProps[];
    results: ResultsProps[];
    inputValue: string;
};

type ActionProps =
    | { type: "SET_IS_OPEN"; payload: boolean }
    | { type: "SET_SUGESTION_LIST"; payload: null | SugestionsListProps[] }
    | { type: "SET_INPUT_VALUE"; payload: string }
    | { type: "SET_RESULTS"; payload: ResultsProps[] };

type SearchBarContextType = {
    state: StateProps;
    dispatch: Dispatch<ActionProps>;
};

export const SearchBarContext = createContext<SearchBarContextType | undefined>(
    undefined
);

const initialState: StateProps = {
    isOpen: false,
    sugestionsList: null,
    results: [],
    inputValue: "",
};

const SearchBarReducer = (state: StateProps, action: ActionProps) => {
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

export const useSearchBarContext = (): SearchBarContextType => {
    const context = useContext(SearchBarContext);
    if (!context) {
        throw new Error(
            "useSearchBarContext must be used within a SearchBarProvider"
        );
    }
    return context;
};

export const SearchBarProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(SearchBarReducer, initialState);

    return (
        <SearchBarContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchBarContext.Provider>
    );
};
