import styles from "./styles.module.scss";

export type ResultsProps = {
    id: number;
    subTitle: string;
    parth: string;
    title: string;
    text: string;
    keywords: string[];
};

const SingleResult = ({ data }: { data: ResultsProps }) => {
    const { subTitle, parth, title, text, keywords } = data;

    return (
        <section className={styles.single_result}>
            <div className={styles.info}>
                <div className={styles.icon}></div>

                <div>
                    <h4> {subTitle}</h4>
                    <p>{parth}</p>
                </div>
            </div>

            <h2 className={styles.main_title}>{title}</h2>

            <p className={styles.text}>{text}</p>
            <ul className={styles.keywords}>
                {keywords.map((item: string) => {
                    return <li key={item}>[{item}]</li>;
                })}
            </ul>
        </section>
    );
};

export default SingleResult;
