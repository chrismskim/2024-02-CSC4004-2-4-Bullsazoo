import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --vh: 100%;
        --font-family: 'Pretendard-Regular';
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, abbr, acronym, address, big, cite,
    del, em, strong, dfn, img, ins, kbd, q, s, samp,
    small, strike, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        box-sizing: border-box;

        /* display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center; */

        background-color: #000B58;
        color: #E6E9AF;
    }

    html {
        font-family: var(--font-family);
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
        font-size: 100%;
    }

    body {
        width: 100%;
        height: 100vh;
        min-height: 100vh;

        background-color: #000B58;
        color: #E6E9AF;

        /* display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center; */
    }

    #root {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    ul, li {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input, select {
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
    }

    input:focus, select:focus {
        outline: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    /* 스크롤바 제거 */
    .scroll::-webkit-scrollbar {
        display: none;
    }
    .scroll {
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
    }

    /* 반응형 폰트 사이즈 */
    @media screen and (max-width: 1799px) {
        html {
        font-size: 50%;
        }
    }
    @media screen and (max-width: 1199px) {
        html {
        font-size: 45%;
        }
    }
    @media screen and (max-width: 991px) {
        html {
        font-size: 40%;
        }
    }
    @media screen and (max-width: 767px) {
        html {
        font-size: 30%;
        }
    }
`;

export default GlobalStyle;
