const useJson = () => {
    const getResultsAutoComplete = async (queryText, limit) => {
        const data = await fetch("getResultsAutoComplete.json").then((res) =>
            res.json()
        );
        console.log(limit);

        return data.filter(({ title }, i) => {
            return (
                i < limit &&
                title.toLowerCase().includes(queryText.toLowerCase())
            );
        });
    };

    const getResultsList = async (queryText) => {
        const data = await fetch("getResultsList.json").then((res) =>
            res.json()
        );

        return data.filter(({ keywords }) => {
            return keywords.some((keyword) =>
                keyword.toLowerCase().includes(queryText.toLowerCase())
            );
        });
    };

    return {
        getResultsAutoComplete,
        getResultsList,
    };
};

export default useJson;
