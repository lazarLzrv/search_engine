import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Index = ({ data }) => {
    const { subTitle, parth, title, text } = data;

    return (
        <Link className={styles.single_result}>
            <div className={styles.info}>
                <div className={styles.icon}></div>
                <div>
                    <h4> {subTitle}</h4>
                    <p>{parth}</p>
                </div>
            </div>
            <h2 className={styles.main_title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </Link>
    );
};

export default Index;
