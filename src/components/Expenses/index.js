import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ExpensesActions from "../../store/ducks/expenses/actions";

class Expenses extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { expenses } = this.props;
    return (
      <>
        <ul>
          {expenses.map(expense => (
            <li key={expense._id}>{expense.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ExpensesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
