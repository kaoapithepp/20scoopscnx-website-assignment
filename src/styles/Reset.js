import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    color: var(--black);
    overscroll-behavior: none;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
`;