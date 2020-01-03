import React from "react";
import { Row, Col, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import * as LogoutActions from "../../store/ducks/logout/actions";
import { bindActionCreators } from "redux";

const MainMenu = props => {
  const { SubMenu } = Menu;
  const { logoutRequest } = props;
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logoutRequest();
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
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
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  logout: state.logout
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LogoutActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
