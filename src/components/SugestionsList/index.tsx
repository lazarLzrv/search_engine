import { useState, useEffect } from "react";
import { useSearchBarContext } from "../../contexts/SearchBarContext";

import { Link } from "react-router-dom";

import clock from "../../assets/icons/clock.svg";
import search from "../../assets/icons/search.svg";

import styles from "./styles.module.scss";

const SugestionsList = () => {
    const { state, dispatch } = useSearchBarContext();
    const { sugestionsList, isOpen } = state;

    const [idInHistory, setIdInHistory] = useState<null | number>(1);
    const [selectedRow, setSelectedRow] = useState(0);

    const onKeyDown = (e: KeyboardEvent) => {
        if (sugestionsList && sugestionsList.length > 0 && isOpen) {
            const setMaxValue = (prev: number) => Math.max(prev - 1, -1);
            const setMinValue = (prev: number) =>
                Math.min(prev + 1, sugestionsList.length - 1);

            if (e.key === "ArrowUp") {
                setSelectedRow((prev) => setMaxValue(prev));
            } else if (e.key === "ArrowDown") {
                setSelectedRow((prev) => setMinValue(prev));
            }
        }
    };

    useEffect(() => {
        if (!isOpen) {
            setSelectedRow(0);
        }

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [sugestionsList, isOpen]);

    useEffect(() => {
        if (selectedRow === -1) {
            dispatch({ type: "SET_INPUT_VALUE", payload: "" });
        } else if (sugestionsList && sugestionsList.length > 0) {
            dispatch({
                type: "SET_INPUT_VALUE",
                payload: sugestionsList[selectedRow].title,
            });
        }
    }, [selectedRow]);

    return (
        <div className={styles.sugestions_list}>
            {sugestionsList && isOpen && (
                <ul>
                    {sugestionsList.length > 0 ? (
                        sugestionsList.map(({ title, id }, i) => {
                            const inHistory = idInHistory === id;
                            return (
                                <li
                                    key={id}
                                    className={`${
                                        inHistory ? styles.in_history : ""
                                    } ${
                                        selectedRow === i ? styles.focused : ""
                                    }`}
                                >
                                    <Link
                                        to={`/search?q=${title.replace(
                                            / /g,
                                            "+"
                                        )}`}
                                        onClick={() => {
                                            dispatch({
                                                type: "SET_IS_OPEN",
                                                payload: false,
                                            });
                                        }}
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
            )}
        </div>
    );
};

export default SugestionsList;
