import React from "react";
import LoginForm from "../../components/LoginForm";

import { Row, Col } from "antd";

import { Wrapper, Box } from "./styled";

const LoginContainer = () => {
  return (
    <Wrapper>
      <Row type="flex" justify="center">
        <Col>
          <Box>
            <LoginForm />
          </Box>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default LoginContainer;
