import React from "react";

import styles from "./styles.module.scss";

const Index = ({ children, size }) => {
    return <div className={`${styles.row} ${size}`}>{children}</div>;
};

export default Index;
