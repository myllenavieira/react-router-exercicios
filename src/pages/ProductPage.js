import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProductPage() {

    const {id} = useParams()

    return (
        <MainContainer>
            <Header />
            <h1>Página de produtos</h1>
            <p>Produto: {id}</p>
        </MainContainer>
    );
}

export default ProductPage;