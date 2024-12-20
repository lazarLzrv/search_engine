import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useJson from "../api/useJson";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import SingleResult from "../components/SingleResult";

const Index = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const { getResultsList } = useJson();

    const [data, setData] = useState([]);

    useEffect(() => {
        if (query) {
            getResultsList(query).then((res) => {
                setData(res);
            });
        }
    }, [query]);

    console.log(data);

    return (
        <>
            <Container size='lg'>
                <SearchBar />
                {data.length > 0 &&
                    data.map((item, i) => {
                        return (
                            i <= 10 && (
                                <SingleResult data={item} key={item.id} />
                            )
                        );
                    })}
            </Container>
        </>
    );
};

export default Index;
