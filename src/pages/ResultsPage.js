import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import SingleResult from "../components/SingleResult";

const Index = () => {
    return (
        <>
            <Container size='lg'>
                <SearchBar />
                <SingleResult />
            </Container>
        </>
    );
};

export default Index;
