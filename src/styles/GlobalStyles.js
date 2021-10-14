import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white-color: #E7E7EB;
        --primary-color: #100E1D;
        --secondary-color: #1E213A;
        --grey-color: #6e707a;
        --yellow-color: #FFEC65;
        --blue-color: #3C47E9;
    }

    html, body {
        font-family: 'Raleway', sans-serif;
        color: var(--white-color);
        background: var(--primary-color);
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }
    
    input, button {
        outline: none
    }
    
    button {
        cursor: pointer
    }

`;

export default GlobalStyles;
