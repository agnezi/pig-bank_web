import styled from "styled-components";

export const MainHeader = styled.header`
  height: 70px;
  background-color: rgb(241, 134, 193);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

export const MenuHamburguer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 70px;
  z-index: 10;
  left: ${props => (props.show ? "0" : "-50%")};
  transition: ${props =>
    props.show
      ? "left 0.2s cubic-bezier(0, 0, 0.2, 1)"
      : "left 0.2s cubic-bezier(0, 0, 0.2, 1)"};
`;
