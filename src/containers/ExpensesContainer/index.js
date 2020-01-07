import React from "react";
import { Row, Col } from "antd";

import { Box } from "./styled";

import ExpensesLineChart from "../../components/ExpensesLineChart";
import ExpensesForm from "../../components/ExpensesForm";
import ExpensesTable from "../../components/ExpensesTable";

const ExpensesContainer = () => {
  return (
    <>
      <Row>
        <Col>
          <ExpensesLineChart />
        </Col>
      </Row>
      <Row gutter={{ xs: 0, sm: 0, md: 0, lg: 10, xl: 10 }}>
        <Col lg={20}>
          <ExpensesTable />
        </Col>
        <Col lg={4}>
          <Box>
            <ExpensesForm />
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default ExpensesContainer;
