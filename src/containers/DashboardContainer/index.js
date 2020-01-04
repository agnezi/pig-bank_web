import React from "react";
import MainMenu from "../../components/MainMenu";
import ExpensesTable from "../../components/ExpensesTable";
import ExpensesBarChart from "../../components/ExpensesBarChart";
import LacesTable from "../../components/LacesTable";
import MainTransitionContainer from "../MainTransitionContainer";

import { Row, Col } from "antd";

const DashboardCotainer = () => {
  return (
    <>
      <MainMenu />
      <Row>
        <Col>
          <ExpensesBarChart />
        </Col>
      </Row>
      <Row gutter={12}>
        <Col xl={{ span: 12 }} lg={{ span: 12 }}>
          <ExpensesTable />
        </Col>
        <Col xl={{ span: 12 }} lg={{ span: 12 }}>
          <LacesTable />
        </Col>
        <MainTransitionContainer />
      </Row>
    </>
  );
};

export default DashboardCotainer;
