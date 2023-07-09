import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
       --vh: 100%;
   }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    
  }
`;

export default GlobalStyle;