import React from "react";

// antd
import { Row, Col, Form, Icon, Input, Button } from "antd";

import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/ducks/login/actions";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form, loadRequest } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        loadRequest(values);
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
              <Button
                type="primary"
                htmlType="submit"
                onSubmit={this.handleSubmit}
              >
                Sign in
              </Button>
              <Link to="/register">
                <Button type="secondary">Sign up</Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "register_form" })(LoginForm);

const mapStateToProps = state => ({
  login: state.login,
  loading: state.register.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);
