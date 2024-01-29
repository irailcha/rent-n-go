import { css } from "@emotion/react";
import "modern-normalize/modern-normalize.css";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  /* ========================= Reset styles ========================= */
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
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
   
    font-family: "Manrope", sans-serif;
    background-color: #cdcdcd;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  /* ========================= /Fonts ========================= */
  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    src: local("Manrope Regular"), local("Manrope-Regular"),
      url(https://fonts.gstatic.com/s/manrope/v5/JCWXJ-fmVT2JnUEYrZJH6kTbgVvFPGnzCh8Oisq-c2I.woff2)
        format("woff2");
  }

  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500; /* Додайте 500 для стилю medium */
    src: local("Manrope Medium"), local("Manrope-Medium"),
      url(https://fonts.gstatic.com/s/manrope/v5/JCWXJ-fmVT2JnUEYrZJH6kTbgVvFPGnzCh8Oisq-c2I.woff2)
        format("woff2");
  }

  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    src: local("Manrope Bold"), local("Manrope-Bold"),
      url(https://fonts.gstatic.com/s/manrope/v5/JCWXJ-fmVT2JnUEYrZJH6kTbgVvFPGnzCh8Oisq-c2I.woff2)
        format("woff2");
  }
  /* ========================= Common styles ========================= */

  html {
    scroll-behavior: smooth;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 12px;
    margin-bottom: 14px;
    height: auto;
  }
`;
