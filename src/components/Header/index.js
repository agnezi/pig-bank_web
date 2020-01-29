import React, { useState } from "react";
import MobileMenu from "../MainMenu/MobileMenu.js";

import { MenuHamburguer, MainHeader, Title, Menu } from "./styled";
import { Icon } from "antd";

const Header = () => {
  const [show, toggleMenu] = useState(false);

  return (
    <>
      {(window.innerWidth < 768 && !!window.localStorage.getItem("token")) ||
      !!window.sessionStorage.getItem("token") ? (
        <MenuHamburguer>
          {show ? (
            <Icon
              onClick={() => toggleMenu(false)}
              type="menu-fold"
              style={{ color: "#fff", fontSize: "20px" }}
            />
          ) : (
            <Icon
              onClick={() => toggleMenu(true)}
              type="menu-unfold"
              style={{ color: "#fff", fontSize: "20px" }}
            />
          )}
        </MenuHamburguer>
      ) : (
        ""
      )}
      <MainHeader>
        <Title>PigBank</Title>
      </MainHeader>
      <Menu show={show} onClick={() => toggleMenu(false)}>
        <MobileMenu />
      </Menu>
    </>
  );
};

export default Header;
