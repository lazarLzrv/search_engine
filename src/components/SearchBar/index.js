import React, { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarContext } from "../../contexts/SearchBarContext";

import useJson from "../../api/useJson";

import Input from "../Input";
import SugestionsList from "../SugestionsList";

import search from "../../assets/icons/search.svg";
import mic from "../../assets/icons/mic.svg";
import photo from "../../assets/icons/photo.svg";

import styles from "./styles.module.scss";

const Index = () => {
    const ref = useRef(null);
    const navigate = useNavigate();

    const { getResultsList } = useJson();

    const { state, updateState } = useContext(SearchBarContext);
    const { inputValue } = state;

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            updateState({ isOpen: false });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        getResultsList(inputValue).then((res) => {
            updateState({ results: res, isOpen: false });
            navigate(`/search?q=${inputValue.replace(/ /g, "+")}`);
        });
    };

    return (
        <div className={styles.wrapper} ref={ref}>
            <form className={styles.search_bar} onSubmit={onSubmit}>
                <div className={styles.inner}>
                    <img className={styles.search_icon} src={search} alt='' />
                    <Input />

                    <div className={styles.additional_icons}>
                        <img src={mic} alt='mic' />
                        <img src={photo} alt='photo' />
                    </div>
                </div>

                <SugestionsList />
            </form>
        </div>
    );
};

export default Index;
