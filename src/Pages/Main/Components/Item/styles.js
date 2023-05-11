import { styled } from "styled-components";

export const Container = styled.a`
  display: flex;
  justify-content: center;

  text-decoration: none;
  button {
    font-family: "Libre Baskerville", serif;
    font-weight: bold;
    font-size: 1.5rem;

    width: 80%;
    max-width: 300px;
    height: 50px;
    border-radius: 20px;

    cursor: pointer;
  }
`;
