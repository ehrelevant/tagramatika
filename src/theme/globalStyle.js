import { createGlobalStyle } from "styled-components";

// Font imports (for bundling purposes)
import BerkshireSwash from '../assets/fonts/BerkshireSwash-Regular.ttf';
import Forum from '../assets/fonts/Forum-Regular.ttf';
import TenorSans from '../assets/fonts/TenorSans-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  /*
    == CSS Reset ==
    http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  /*
    == Actual Styles Start Here ==
  */


  /* Font Imports */
  @font-face {
    font-family: 'BerkshireSwash';
    src: url(${BerkshireSwash}) format('truetype');
  }

  @font-face {
    font-family: 'Forum';
    src: url(${Forum}) format('truetype');
  }

  @font-face {
    font-family: 'TenorSans';
    src: local(${TenorSans}), url('./assets/fonts/TenorSans-Regular.ttf') format('truetype');
  }

  /* Global Font Families */
  h1 {
    font-family: 'BerkshireSwash';
  }

  h2 {
    font-family: 'Forum';
  }

  body, p, div, span, textarea, button {
    font-family: 'TenorSans';
  }
`;

export default GlobalStyle;