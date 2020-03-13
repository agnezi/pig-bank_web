import React from "react";

// antd
import { Form, Icon, Input, Button, Spin } from "antd";

import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/ducks/login/actions";
import * as LogoutActions from "../../store/ducks/logout/actions";

class LoginForm extends React.Component {
  componentDidMount = () => {
    const { logoutRequest } = this.props;
    logoutRequest();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, loginRequest } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        loginRequest(values);
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
    console.log(this.props.login);
    const { form } = this.props;
    const formItemLayout = {
      labelCol: {},
      wrapperCol: {}
    };
    const tailFormItemLayout = {
      wrapperCol: {}
    };

    const { loading } = this.props;
    return (
      <>
        {!loading ? (
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail" hasFeedback>
              {form.getFieldDecorator("email", {
                rules: [
                  { type: "email", message: "The input is not valid E-mail!" },
                  { required: true, message: "Please input your E-mail!" }
                ]
              })(<Input placeholder="E-mail" prefix={<Icon type="mail" />} />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {form.getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input yout password!" },
                  {
                    validator: this.validateToNext
                  }
                ]
              })(
                <Input.Password
                  placeholder="Password"
                  prefix={<Icon type="lock"></Icon>}
                />
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                onSubmit={this.handleSubmit}
                block
              >
                Sign in
              </Button>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Link to="/register">
                <Button type="secondary" block>
                  Sign up
                </Button>
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <Spin size="large" />
        )}
      </>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "register_form" })(LoginForm);

const mapStateToProps = state => ({
  login: state.login,
  loading: state.register.loading
});

const actions = Object.assign({}, LoginActions, LogoutActions);
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);
