import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    background: ${({theme}) => theme.body};
    color: ${({theme}) =>
        theme.text};font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
  `;
