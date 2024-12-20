import React, { useState, useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";

import { Link } from "react-router-dom";

import clock from "../../assets/icons/clock.svg";
import search from "../../assets/icons/search.svg";

import styles from "./styles.module.scss";

const Index = () => {
    const { state, updateState } = useContext(SearchBarContext);
    const { sugestionsList, isOpen } = state;

    const [idInHistory, setIdInHistory] = useState(1);

    return (
        sugestionsList &&
        isOpen && (
            <div className={styles.sugestions_list}>
                <ul>
                    {sugestionsList.length > 0 ? (
                        sugestionsList.map(({ title, id }, i) => {
                            const inHistory = idInHistory === id;
                            return (
                                i < 10 && (
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
                                            onClick={() => {
                                                updateState({ isOpen: false });
                                            }}
                                        >
                                            {inHistory ? (
                                                <img src={clock} alt='' />
                                            ) : (
                                                <img
                                                    className={
                                                        styles.search_icon
                                                    }
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
                                )
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
