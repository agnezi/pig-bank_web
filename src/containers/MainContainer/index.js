import React from "react";
import ExpensesTable from "../../components/ExpensesTable";
import LacesTable from "../../components/LacesTable";
import ExpensesForm from "../../components/ExpensesForm";

import { Row, Col } from "antd";

const MainContainer = () => {
  return (
    <Row gutter={12}>
      <Col xl={{ span: 12 }} lg={{ span: 12 }}>
        <ExpensesTable />
      </Col>
      <Col xl={{ span: 12 }} lg={{ span: 12 }}>
        <LacesTable />
      </Col>
      <ExpensesForm />
    </Row>
  );
};

export default MainContainer;
