import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeImg = styled.div`
  background-image: url("./assets/image05.webp");
  width: 100%;
  height: 65vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const AlreadySignedIn = styled(Link)`
  color: #ffffff;
`;
