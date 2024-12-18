import Container from "./components/Container";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";

import "./styles/globals.scss";

function App() {
    return (
        <>
            <Container>
                <Title text='text' />
                <SearchBar />
            </Container>
        </>
    );
}

export default App;
