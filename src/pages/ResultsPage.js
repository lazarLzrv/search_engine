import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBarContext } from "../contexts/SearchBarContext";

import useJson from "../api/useJson";

import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

import SearchBar from "../components/SearchBar";
import SingleResult from "../components/SingleResult";

const Index = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const { state, updateState } = useContext(SearchBarContext);
    const { results } = state;

    const { getResultsList } = useJson();

    useEffect(() => {
        if (query) {
            getResultsList(query).then((res) => {
                updateState({ results: res });
            });

            updateState({ inputValue: query });
        }
    }, [query]);

    return (
        <>
            <Container size='lg'>
                <SearchBar />
                <Row>
                    <Col size='md-8'>
                        {results.length > 0 ? (
                            results.map((item, i) => {
                                return (
                                    i < 10 && (
                                        <SingleResult
                                            data={item}
                                            key={item.id}
                                        />
                                    )
                                );
                            })
                        ) : (
                            <h4>No results Found!</h4>
                        )}
                    </Col>

                    <Col size='md-4'>
                        Total results: <strong>{results.length}</strong>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;
