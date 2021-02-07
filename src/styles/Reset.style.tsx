import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.5rem;
        font-family: -system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        &:active,
        &:focus,
        &:hover {
            text-decoration: none;
        }
    }
`;

export default GlobalStyles;
