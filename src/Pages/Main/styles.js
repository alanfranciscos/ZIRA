import { styled } from "styled-components";

export const Container = styled.section`
  margin: 0px;
  padding: 0px;
  background-color: #9bc4c2;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Libre Baskerville", serif;

  h1 {
    font-weight: bold;
    font-size: 5rem;
    padding-top: 50px;
  }

  h2 {
    font-weight: normal;
    font-size: 1.8rem;
    padding: 30px 0px;
  }
`;

export const Itens = styled.div`
  width: 100%;
`;
