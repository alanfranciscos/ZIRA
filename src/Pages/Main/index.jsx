import { Item } from "./Components/Item";
import { Container, Itens, Titles } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Titles>
        <h1>ZIRA</h1>
        <h2>Catalogos</h2>
      </Titles>

      <Itens>
        <Item />
      </Itens>
    </Container>
  );
};
