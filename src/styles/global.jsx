import { createGlobalStyle } from 'styled-components' 

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: mediumslateblue;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        /* border: 2px solid springgreen; */
        text-decoration: none;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        min-height: 100vh;
    }
`