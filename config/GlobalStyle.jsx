import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLORS } from '../constants/colors';

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

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.secondaryFont}; 
    background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
  } 
`;
