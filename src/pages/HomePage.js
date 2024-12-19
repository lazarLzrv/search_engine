import Container from "../components/Container";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";

const Index = () => {
    return (
        <>
            <Container size='sm'>
                <Title text='search X' />
                <SearchBar />
            </Container>
        </>
    );
};

export default Index;
