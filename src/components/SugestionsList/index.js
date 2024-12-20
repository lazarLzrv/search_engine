import React, { useState, useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";

import { Link } from "react-router-dom";

import clock from "../../assets/icons/clock.svg";
import search from "../../assets/icons/search.svg";

import styles from "./styles.module.scss";

const Index = () => {
    const { data } = useContext(SearchBarContext);

    const [idInHistory, setIdInHistory] = useState(1);

    return (
        data && (
            <div className={styles.sugestions_list}>
                <ul>
                    {data.length > 0 ? (
                        data.map(({ title, id }) => {
                            const inHistory = idInHistory === id;
                            return (
                                <li
                                    key={id}
                                    className={
                                        inHistory ? styles.in_history : ""
                                    }
                                >
                                    <Link
                                        to={`/search?q=${title.replace(
                                            / /g,
                                            "+"
                                        )}`}
                                    >
                                        {inHistory ? (
                                            <img src={clock} alt='' />
                                        ) : (
                                            <img
                                                className={styles.search_icon}
                                                src={search}
                                                alt=''
                                            />
                                        )}
                                        {title}
                                    </Link>
                                    {inHistory ? (
                                        <span
                                            onClick={() => {
                                                setIdInHistory(null);
                                            }}
                                        >
                                            delete
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </li>
                            );
                        })
                    ) : (
                        <li className={styles.text_center}>
                            No results found !
                        </li>
                    )}
                </ul>
            </div>
        )
    );
};

export default Index;
