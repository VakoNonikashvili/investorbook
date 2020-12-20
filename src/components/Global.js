import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
  }

  html {
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(black, 0);
  }

  body {
    margin: 0; 
    font-family: 'Agenda', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    background: #E5E5E5;
    font-weight: 400;
  }

  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box; 
    padding: 0;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
`;

export default Global;
