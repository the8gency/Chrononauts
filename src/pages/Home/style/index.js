import styled from "styled-components";
import { screensize } from "../../../style/constants";

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

  const Banner = styled.div`
  position: relative;

h1 {
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  
  img {
    width: 100%;
    min-height: 10rem;
  }
`;

const GridStyling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-left: 1rem;
  }

  @media (min-width: ${screensize.mobile}) {
    flex-direction: row;
  }
`;

export { H1, Banner, GridStyling };