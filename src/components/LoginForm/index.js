import React from "react";
import { Row, Col, Form, Icon, Input, Button } from "antd";

class LoginForm extends React.Component {
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

  validateToNext = (rule, value, callback) => {
    const { form } = this.props;
    if (value) {
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
            <Form.Item label="Password" hasFeedback>
              {form.getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input yout password!" },
                  {
                    validator: this.validateToNext
                  }
                ]
              })(<Input.Password prefix={<Icon type="lock"></Icon>} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
const WrappedLoginForm = Form.create({ name: "register_form" })(LoginForm);

export default WrappedLoginForm;
