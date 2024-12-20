import React from "react";

import styles from "./styles.module.scss";

const Index = ({ children }) => {
    return <div className={styles.row}>{children}</div>;
};

export default Index;
