import React from "react";

import styles from "./styles.module.scss";

const Container = ({ size = "sm", children }) => {
    return (
        <section className={`${styles.container} ${styles[size]}`}>
            {children}
        </section>
    );
};

export default Container;
