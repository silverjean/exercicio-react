import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: 0;

    font-family: Arial, Helvetica, sans-serif
  }

  body {
    max-width: 1200px;
  }
`;
