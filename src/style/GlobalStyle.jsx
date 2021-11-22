import { createGlobalStyle } from "styled-components";
import { color } from "./constants";

export const GlobalStyling = createGlobalStyle`
*{
    padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        color: inherit;
        word-break: break-word;
        font-weight: inherit;
        font-size: inherit;
}

body {
    background-color: ${color.mainLight};
}

a, button {
    cursor: pointer;
}
`