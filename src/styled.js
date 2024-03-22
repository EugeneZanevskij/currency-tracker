import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-family: 'Poppins', sans-serif;
  }
`;

export default Global;
