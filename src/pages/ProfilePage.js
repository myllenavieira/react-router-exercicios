import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProfilePage() {

  const {name} = useParams()

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca do usuário</h1>
      <p>Usuário: {name}</p>
    </MainContainer>
  );
}

export default ProfilePage;
