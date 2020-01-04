import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Wrapper, Box } from "./styled";

import { Row, Col } from "antd";

const RegisterContainer = () => {
  return (
    <Wrapper>
      <Row type="flex" justify="center">
        <Col>
          <Box>
            <RegisterForm />
          </Box>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default RegisterContainer;
