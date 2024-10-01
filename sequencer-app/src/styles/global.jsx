import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #181818;
    color: #ffffff;
    font-family: Arial, sans-serif;
  }

  input, button {
    background-color: #282828;
    color: #ffffff;
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
  }

  input::placeholder {
    color: #bbbbbb;
  }
`;
