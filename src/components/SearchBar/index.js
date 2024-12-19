import React from "react";
import Input from "../Input";
import SugestionsList from "../SugestionsList";

import search from "../../assets/icons/search.svg";
import mic from "../../assets/icons/mic.svg";
import photo from "../../assets/icons/photo.svg";

import styles from "./styles.module.scss";

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.search_bar}>
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
