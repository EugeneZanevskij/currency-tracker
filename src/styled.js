import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #030304;
    font-family: 'Poppins', sans-serif;
  }
`;

export default Global;
