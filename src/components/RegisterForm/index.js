import React from "react";
import { Row, Col, Form, Icon, Input, Button } from "antd";

class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      } else {
        console.log(err);
      }
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  render() {
    const { form } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Row type="flex" justify="center">
        <Col>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail" hasFeedback>
              {form.getFieldDecorator("email", {
                rules: [
                  { type: "email", message: "The input is not valid E-mail!" },
                  { required: true, message: "Please input your E-mail!" }
                ]
              })(<Input prefix={<Icon type="mail" />} />)}
            </Form.Item>
            <Form.Item label="Name" hasFeedback>
              {form.getFieldDecorator("name", {
                rules: [{ required: true, message: "Please input your name!" }]
              })(<Input prefix={<Icon type="user" />} />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {form.getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input yout password!" },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input.Password prefix={<Icon type="lock"></Icon>} />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {form.getFieldDecorator("confirm", {
                rules: [
                  { required: true, message: "Please confirm yout password!" },
                  { validator: this.compareToFirstPassword }
                ]
              })(<Input.Password prefix={<Icon type="lock"></Icon>} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
const WrappedRegisterForm = Form.create({ name: "register_form" })(
  RegisterForm
);

export default WrappedRegisterForm;
