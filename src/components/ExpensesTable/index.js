import React from "react";

//antd
import { Table } from "antd";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ExpensesActions from "../../store/ducks/expenses/actions";

class ExpensesTable extends React.Component {
  async componentDidMount() {
    const { loadRequest } = this.props;
    try {
      await loadRequest();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { loading, loadRequest, expenses } = this.props;
    const totalItens = expenses.data.total;
    const pageLimit = expenses.data.limit;

    const columns = [
      {
        title: "Title",
        dataIndex: "title"
      },
      {
        title: "Amount",
        dataIndex: "amount"
      },
      {
        title: "Category",
        dataIndex: "category"
      }
    ];
    const data = expenses.data.docs;

    const paginationConfig = {
      pageSize: pageLimit,
      total: totalItens,
      showSizeChanger: true,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
      onChange: (page, pageSize) => {
        loadRequest({ page });
      },
      onShowSizeChange: (current, size) => {
        loadRequest({ page: current, pageSize: size });
      }
    };
    return (
      <>
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          rowKey={"_id"}
          pagination={paginationConfig}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  loading: state.expenses.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ExpensesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
