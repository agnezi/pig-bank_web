import React from "react";
import { Row, Col, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <Row type={"flex"} justify={"center"}>
      <Col>
        <Menu mode="horizontal">
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
            <Link to="/lace">
              <Icon type="dollar" />
              Lace
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/settings">
              <Icon type="setting" />
              Settings
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default MainMenu;
