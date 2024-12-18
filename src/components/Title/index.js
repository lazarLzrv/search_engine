import React from "react";

import styles from "./styles.module.scss";

const Index = ({ text }) => {
    return <h3 className={styles.title}>{text}</h3>;
};

export default Index;
