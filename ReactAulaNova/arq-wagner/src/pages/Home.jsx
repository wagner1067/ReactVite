import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>Subtitle home</p>
            <Button buttonStyle="secondary" arrow> Teste</Button>
            <Footer />
        </>
    )
}

export default Home;