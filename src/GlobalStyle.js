import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1980px; 
    --bodyMaxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #131A1F; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 3.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    position: relative;

  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif; 
  }

  body::-webkit-scrollbar {
    width: 14px;
  }
  body {
    scrollbar-width: thin;
    scrollbar-color: var(--lightGrey) black;
  }
  body::-webkit-scrollbar-track {
    background: black;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--lightGrey) ;
    border-radius: 6px;
    border: 3px solid black;
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--medGrey);

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--darkGrey);
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 140px;
      background-color: #333333;
      color: white;
      text-align: center;
      padding-top: 100px;

      @media only screen and (min-width: 1778px) {
        position: relative;
      }
    }
  }
`;
