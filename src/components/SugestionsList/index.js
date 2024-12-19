import React from "react";
import { Link } from "react-router-dom";

import clock from "../../assets/icons/clock.svg";

import styles from "./styles.module.scss";

const Index = () => {
    return (
        <div className={styles.sugestions_list}>
            <ul>
                <li>
                    <Link to='/'>
                        <img src={clock} alt='' />
                        sdfsdfg
                    </Link>
                    <span>delete</span>
                </li>
                <li>
                    <Link to='/'>
                        <img src={clock} alt='' />
                        sdfsdfg
                    </Link>
                    <span>delete</span>
                </li>
                <li>
                    <Link to='/'>
                        <img src={clock} alt='' />
                        sdfsdfg
                    </Link>
                    <span>delete</span>
                </li>
                <li>
                    <Link to='/'>
                        <img src={clock} alt='' />
                        sdfsdfg
                    </Link>
                    <span>delete</span>
                </li>
            </ul>
        </div>
    );
};

export default Index;
