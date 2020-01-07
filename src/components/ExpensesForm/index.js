import React from "react";
import { Form, Input, Icon, Button } from "antd";

class ExpensesForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          {getFieldDecorator("title", {
            rules: [
              { required: true, message: "Please input a expense title." }
            ]
          })(
            <Input
              prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Title"
            />
          )}
        </Form.Item>
        <Form.Item label="Amount">
          {getFieldDecorator("amount", {
            rules: [{ required: true, message: "Please input the amount." }]
          })(
            <Input
              prefix={
                <Icon type="dollar" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Amount"
            />
          )}
        </Form.Item>
        <Form.Item label="Category">
          {getFieldDecorator("category", {
            rules: [{ required: true, message: "Plese input the category" }]
          })(
            <Input
              prefix={
                <Icon type="database" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Category"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={this.handleSubmit}
            htmlType="submit"
            block
          >
            Create Expense
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "expense_create" })(
  ExpensesForm
);

export default WrappedRegistrationForm;
