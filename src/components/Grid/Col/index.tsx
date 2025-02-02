import { ReactNode } from "react";

import styles from "./styles.module.scss";

type ColProps = {
    children: ReactNode;
    size: string;
};

const Col = ({ children, size }: ColProps) => {
    return <div className={`${styles.row} ${size}`}>{children}</div>;
};

export default Col;
