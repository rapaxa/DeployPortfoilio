import {Header} from "./layout/header/Header.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Container} from "./components/Container.tsx";

function App() {
    return (
        <>
            <Header/>
            <Container>
                <Main/>
                <Footer/>
            </Container>

        </>

    )
}

export default App



