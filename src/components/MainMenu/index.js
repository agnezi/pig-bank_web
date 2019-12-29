import React from "react";
import { Menu, Icon } from "antd";

const MainMenu = () => {
  return (
    <Menu>
      <Menu.Item>
        <Icon type="layout" />
        Home
      </Menu.Item>
      <Menu.Item>
        <Icon type="setting" />
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
