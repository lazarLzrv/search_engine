import { ReactNode } from "react";

import styles from "./styles.module.scss";

type ContainerProps = {
    size: string;
    children: ReactNode;
};

const Container = ({ size = "sm", children }: ContainerProps) => {
    return (
        <section className={`${styles.container} ${styles[size]}`}>
            {children}
        </section>
    );
};

export default Container;
