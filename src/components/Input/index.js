import React, { useEffect, useRef, useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";

import useJson from "../../api/useJson";

import styles from "./styles.module.scss";

const Index = () => {
    const ref = useRef(null);

    const { getResultsAutoComplete } = useJson();

    const { updateState, state } = useContext(SearchBarContext);
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
                updateState({ sugestionsList: res, isOpen: true });
            });
        }
        updateState({ inputValue: value });
    };

    return (
        <input
            value={inputValue}
            type='text'
            ref={ref}
            className={styles.input}
            onChange={(e) => onChange(e)}
            onClick={() => {
                updateState({ isOpen: true });
            }}
        />
    );
};

export default Index;
