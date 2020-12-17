import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
         background-image: url(images/misc/bg-grid.jpg);
        //  background: black;
        background-attachment: fixed;
        color: #333333;
        font-size: 16px;
    }
`;