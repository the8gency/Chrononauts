import styled from "styled-components";
import { color } from "../../../../style/constants";

export const StyledHeader = styled.header`
    width: 100%;
    height: 5rem;
    background-color: ${color.mainDark};
    color: ${color.mainLight};
    display: flex;
    align-items: center;
    `

export const NavWrapper = styled.div`
    width: 40rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`