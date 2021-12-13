import styled, { createGlobalStyle, css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const DARK_MODE_SECENDORY_COLOR = "white";
export const LIGHT_MODE_SECENDORY_COLOR = "BLACK";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
        scroll-behavior: smooth;

  }
  
  :root {

    
    --for-active-click: scale(.92);
    --hover: scale(1.08);
    --main-transition: all .2s ease;

    --color-primary: #007c89;
    --color-primary-hover: #004e56;

    --color-secondary: #FFE01B;
    
    --color-transparent: transparent;
    --color-transparent-hover: rgba(36,28,21,.1);

    --text-color-primary: black;
    --text-color-secondary: white;
    --main-transition: all .4s ;
 
 
 
 
  }
  html {

  }
  body{
      
      overflow-x: hidden;
  }

  
  a{
      text-decoration: none;
      color: black;
      
  }
  
  @media only screen and (min-width: 768px){
      body{
          font-size: 16px;
      }
  }
  
  @media only screen and (min-width: 480px) and (max-width: 768px){
      body{
          font-size: 15px;
      }
  }
  
  @media only screen and (max-width: 479px) {
      body{
          font-size: 14px;
      }
  }

 
  
`;

export default GlobalStyle;

