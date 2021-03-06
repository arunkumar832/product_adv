import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans', sans-serif;
        font-family: Georgia, serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #disqus_thread {
        position: relative;
    }
    #disqus_thread:after {
        content: "";
        display: block;
        height:55px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0) linear-gradient(to bottom,lightseagreen,lightyellow) repeat scroll 0% 0%;
    }
`