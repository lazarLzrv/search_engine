import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Index = () => {
    return (
        <Link className={styles.single_result}>
            <div className={styles.info}>
                <div className={styles.icon}></div>
                <div>
                    <h4> React</h4>
                    <p>https://github.com › facebook › react</p>
                </div>
            </div>
            <h2 className={styles.main_title}>
                facebook/react: The library for web and native user interfaces.
            </h2>
            <p className={styles.text}>
                This page is an overview of the React documentation and related
                resources. React is a JavaScript library for building user
                interfaces. Learn what React is This page is an overview of the
                React documentation and related resources. React is a JavaScript
                library for building user interfaces. Learn what React is
            </p>
        </Link>
    );
};

export default Index;
