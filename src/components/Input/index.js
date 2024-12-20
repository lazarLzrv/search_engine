import React, { useEffect, useRef, useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";

import useJson from "../../api/useJson";

import styles from "./styles.module.scss";

const Index = () => {
    const ref = useRef(null);
    const { getResultsAutoComplete } = useJson();
    const { setData } = useContext(SearchBarContext);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const onChange = (e) => {
        const { value } = e.target;
        if (value) {
            getResultsAutoComplete(value).then((res) => {
                setData(res);
            });
        }
    };

    return (
        <input
            type='text'
            ref={ref}
            className={styles.input}
            onChange={(e) => onChange(e)}
        />
    );
};

export default Index;
