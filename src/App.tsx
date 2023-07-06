// import styles from './App.module.css';

import Post from "./components/Post";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
    <EstiloGlobal />
    <Container>
      <Post imageUrl="https://static3.tcdn.com.br/img/img_prod/460977/batman_vs_superman_batmobile_model_kit_dtc_13129_2_20201211162227.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </Container>
    </>
  );
}

export default App;
