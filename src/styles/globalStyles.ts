import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: white;
    min-height: 100vh;
    padding: 24px;
    display: flex;
    justify-content: center;
  }
`;
