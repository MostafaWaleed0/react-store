import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import { createGlobalStyle } from "styled-components";
import { fs } from "../styles/variables";
import { colors } from "../styles/theme";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
    padding: 0;
    margin-bottom: 0;
    list-style: none;
    }

    html:focus-within {
    scroll-behavior: smooth;
    }

    body {
    font-family: 'Poppins', sans-serif;
    font-size: ${fs.fs400};
    line-height: 2;
    color: ${colors.matterhorn};
    min-height: 100vh;
    text-rendering: optimizeSpeed;


    }

    a {
      text-decoration-skip-ink: auto;
      text-decoration: none;
    }

    img,
    picture {
    max-width: 100%;
    display: block;
    }

    input,
    button,
    textarea,
    select {
    background: none;
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
  }

  h1 {
    font-size: ${fs.fs700};
    font-weight: 600;
    line-height: 1.5em;
    color: ${colors.white};
    max-width: 25ch;

  }

  h2 {
    font-size: ${fs.fs600};
    font-weight: 500;
  }

  p {
    max-width: 70ch;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
