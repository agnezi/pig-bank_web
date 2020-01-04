import React from "react";

//antd
import { Form, Icon, Input, Button } from "antd";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RegisterActions from "../../store/ducks/register/actions";

class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form, loadRequest } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { name, email, password } = values;
        loadRequest({ name, email, password });
      } else {
        console.log(err);
      }
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value.length > 8) {
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
      labelCol: {},
      wrapperCol: {}
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {},
        sm: {}
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail" hasFeedback>
          {form.getFieldDecorator("email", {
            rules: [
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" }
            ]
          })(<Input placeholder="E-mail" prefix={<Icon type="mail" />} />)}
        </Form.Item>
        <Form.Item label="Name" hasFeedback>
          {form.getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input your name!" }]
          })(<Input placeholder="Name" prefix={<Icon type="user" />} />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {form.getFieldDecorator("password", {
            rules: [
              { required: true, message: "Please input yout password!" },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(
            <Input.Password
              placeholder="Password"
              prefix={<Icon type="lock"></Icon>}
            />
          )}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {form.getFieldDecorator("confirm", {
            rules: [
              { required: true, message: "Please confirm yout password!" },
              { validator: this.compareToFirstPassword }
            ]
          })(
            <Input.Password
              placeholder="Confirm password"
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
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedRegisterForm = Form.create({ name: "register_form" })(
  RegisterForm
);

const mapStateToProps = state => ({
  expenses: state.register,
  loading: state.register.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RegisterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegisterForm);
