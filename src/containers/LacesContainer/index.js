import React from "react";
import { Row, Col } from "antd";

import { Box } from "./styled";

import LacesLineChart from "../../components/LacesLineChart";
import LacesTable from "../../components/LacesTable";
import LacesForm from "../../components/LacesForm";

const LacesContainer = () => {
  return (
    <>
      <Row>
        <Col>
          <LacesLineChart />
        </Col>
      </Row>
      <Row>
        <Col lg={20}>
          <LacesTable />
        </Col>
        <Col lg={4}>
          <Box>
            <LacesForm />
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default LacesContainer;
