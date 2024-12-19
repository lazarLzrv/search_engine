import React, { useEffect, useRef } from "react";
import useJson from "../../api/useJson";

import styles from "./styles.module.scss";

const Index = () => {
    const ref = useRef(null);
    const { getResultsAutoComplete } = useJson();

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }

        // Promise.get([getResultsAutoComplete()]).then((data) => {
        //     console.log("data");
        // });
    }, []);

    return <input type='text' ref={ref} className={styles.input} />;
};

export default Index;
