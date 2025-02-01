import React from "react";

import styles from "./styles.module.scss";

const Row = ({ children }) => {
    return <div className={styles.row}>{children}</div>;
};

export default Row;
