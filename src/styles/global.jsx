import { createGlobalStyle } from 'styled-components' 

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: rgb(127, 146, 255);
        --classic: mediumspringgreen;
        --grey-1: #ddd;
        --white: #fff;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        text-decoration: none;
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        background-color: transparent;
        width: 16px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
        border-radius: 10px;
    }
`