import { StyledHeader, StyledButton } from "../style";
import { goToHome, goToProduct, goToProfile } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate()

    return (
        <StyledHeader>
            <StyledButton onClick={() => goToHome(navigate)} >
                Ir para página inicial
            </StyledButton>
            <StyledButton onClick={() => goToProfile(navigate, "Myllena")} >
                Ir para página de perfil
            </StyledButton>
            <StyledButton onClick={() => goToProduct(navigate, "Blusa")} >
                Ir para página de produtos
            </StyledButton>
        </StyledHeader>
    );
}

export default Header;