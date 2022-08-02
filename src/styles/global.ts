import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
input,
textarea,
button {
    background: #1A1A1A;
    font-weight: 700;
    font-size: 0.8rem;
    color: #808080;
    font-family: 'Roboto', sans-serif;
}

`;

