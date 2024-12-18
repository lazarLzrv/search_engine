import React from "react";
import Input from "../Input";

import search from "../../assets/icons/search.svg";
import mic from "../../assets/icons/mic.svg";
import photo from "../../assets/icons/photo.svg";

import styles from "./styles.module.scss";

const Index = () => {
    return (
        <>
            <form className={styles.search_wrapper}>
                <img className={styles.search_icon} src={search} alt='' />
                <Input />

                <div className={styles.additional_icons}>
                    <img src={mic} alt='' />
                    <img src={photo} alt='' />
                </div>
            </form>
        </>
    );
};

export default Index;
