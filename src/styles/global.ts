import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button {
    border: none;
    cursor: pointer;
  }


  body {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  `;
