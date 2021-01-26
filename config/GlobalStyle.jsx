import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    box-sizing: border-box;
    font-size: 13px;
    font-family: 'Raleway';
  }
  body {
    height: 100vh;
    font-family: 'Raleway';
    max-width: 100%;
    overflow-x: hidden;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
  a[disabled] {
    pointer-events: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }  
`;
