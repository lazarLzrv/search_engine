import React from "react";

import styles from "./styles.module.scss";

const Index = ({ children }) => {
    return <section className={styles.container}>{children}</section>;
};

export default Index;
