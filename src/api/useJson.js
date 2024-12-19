const useJson = () => {
    const getResultsAutoComplete = async () => {
        return fetch("getResultsAutoComplete.json").then((res) => res.json());
    };

    return {
        getResultsAutoComplete,
    };
};

export default useJson;
