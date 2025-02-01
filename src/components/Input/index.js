import React, { useEffect, useRef } from "react";
import { useSearchBarContext } from "../../contexts/SearchBarContext";

import useJson from "../../api/useJson";

import styles from "./styles.module.scss";

const Input = () => {
    const ref = useRef(null);

    const { getResultsAutoComplete } = useJson();

    const { state, dispatch } = useSearchBarContext();
    const { inputValue } = state;

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const onChange = (e) => {
        const { value } = e.target;
        if (value) {
            getResultsAutoComplete(value, 10).then((res) => {
                dispatch({ type: "SET_IS_OPEN", payload: true });
                dispatch({ type: "SET_SUGESTION_LIST", payload: res });
            });
        }
        dispatch({ type: "SET_INPUT_VALUE", payload: value });
    };

    return (
        <input
            ref={ref}
            value={inputValue}
            type='text'
            className={styles.input}
            onChange={onChange}
            onClick={() => {
                dispatch({ type: "SET_IS_OPEN", payload: true });
            }}
        />
    );
};

export default Input;
