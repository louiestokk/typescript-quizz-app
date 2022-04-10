import { url } from "inspector";
import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/beach.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%
}
body{
    background:linear-gradient(rgba(0.3,0.3,0.3,0.3),rgba(0.3,0.3,0.3,0.3)), url(${BGImage});
    background-size: cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
    color:white;
    font-size:1.5rem;
    font-weight:bold;

}
*{
    box-sizing:border-box;
    font-family: 'Catamaran' sans-serif
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, white, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
`;
