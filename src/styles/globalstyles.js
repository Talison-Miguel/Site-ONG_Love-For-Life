import { createGlobalStyle } from 'styled-components';

import arial from '../assets/fonts/arial/arial.woff';
import arial2 from '../assets/fonts/arial/arial.woff2';

import arialbold from '../assets/fonts/arial/arialbold.woff';
import arialbold2 from '../assets/fonts/arial/arialbold.woff2';

import arialblack from '../assets/fonts/arial/arialblack.woff';
import arialblack2 from '../assets/fonts/arial/arialblack.woff2';

import typewriterserialxbold from '../assets/fonts/typewriterSerial/typewriterserialxbold.woff';
import typewriterserialxbold2 from '../assets/fonts/typewriterSerial/typewriterserialxbold.woff2';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'arial';
        src: url(${arial}) format('woff2'), /* Para navegadores modernos */
             url(${arial2}) format('woff'); /* Para navegadores mais antigos */
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'arial-bold';
        src: url(${arialbold}) format('woff2'), /* Para navegadores modernos */
             url(${arialbold2}) format('woff'); /* Para navegadores mais antigos */
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'arial-black';
        src: url(${arialblack}) format('woff2'), /* Para navegadores modernos */
             url(${arialblack2}) format('woff'); /* Para navegadores mais antigos */
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'typewriterSerial';
        src: url(${typewriterserialxbold}) format('woff2'), /* Para navegadores modernos */
             url(${typewriterserialxbold2}) format('woff'); /* Para navegadores mais antigos */
        font-weight: normal;
        font-style: normal;
    }

    /* Reset de estilos */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        line-height: 1;
        color: white;
    }

    img {
        border-style: none;
    }

    embed,
    object,
    iframe {
        margin: 0;
        padding: 0;
        border: 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    ul {
        list-style: none;
    }

    ::selection {
        background-color: #b3d4fc;
        text-shadow: none;
    }

    input,
    button,
    textarea {
        margin: 0;
        font: inherit;
        color: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        font: inherit;
        color: inherit;
        cursor: pointer;
    }
`;