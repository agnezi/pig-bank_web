import React from "react";
import { Form, Input, Icon } from "antd";

const ExpensesForm = () => {
  return (
    <Form>
      <Form.Item>
        <Input
          prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="dollar" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Amount"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="database" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Category"
        />
      </Form.Item>
    </Form>
  );
};

export default ExpensesForm;
