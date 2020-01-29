import React from "react";

import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as LogoutActions from "../../store/ducks/logout/actions";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { SubMenu } = Menu;

  const handleLogout = async () => {
    await dispatch(LogoutActions.logoutRequest());
    history.push("/login");
  };

  return (
    <Menu style={{ width: 150 }}>
      <Menu.Item>
        <Link to="/">
          <Icon type="layout" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/expenses">
          <Icon type="shopping-cart" />
          Expenses
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/laces">
          <Icon type="dollar" />
          Laces
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/feed">
          <Icon type="switcher" />
          Feed
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/bank">
          <Icon type="bank" />
          Bank
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">
          <Icon type="setting" />
          Settings
        </Link>
      </Menu.Item>
      <SubMenu
        title={
          <span>
            <Icon type="user" />
            User
          </span>
        }
      >
        <Menu.ItemGroup title="Options">
          <Menu.Item key="Perfil">Perfil</Menu.Item>
          <Menu.Item key="Logout" onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default MobileMenu;
