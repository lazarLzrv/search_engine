const useJson = () => {
    const getResultsAutoComplete = async (queryText: string, limit: number) => {
        const data = await fetch("getResultsAutoComplete.json").then((res) =>
            res.json()
        );

        return data.filter(({ title }: { title: string }, i: number) => {
            return (
                i < limit &&
                title.toLowerCase().includes(queryText.toLowerCase())
            );
        });
    };

    const getResultsList = async (queryText: string) => {
        const data = await fetch("getResultsList.json").then((res) =>
            res.json()
        );

        return data.filter(({ keywords }: { keywords: string[] }) => {
            return keywords.some((keyword: string) =>
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
