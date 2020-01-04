import React from "react";
import { Row, Col } from "antd";

import MainMenu from "../../components/MainMenu";
import ExpensesForm from "../../components/ExpensesForm";
import ExpensesTable from "../../components/ExpensesTable";

const ExpensesContainer = () => {
  return (
    <>
      <MainMenu />
      <Row>
        <Col>
          <ExpensesTable />
        </Col>
        <Col>
          <ExpensesForm />
        </Col>
      </Row>
    </>
  );
};

export default ExpensesContainer;
