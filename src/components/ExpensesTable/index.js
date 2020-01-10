import React from "react";

//antd
import { Table, Button } from "antd";

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

  handleDelete(row) {
    const { deleteRequest } = this.props;
    deleteRequest({ id: row._id });
  }

  render() {
    const { loading, loadRequest, expenses } = this.props;
    const totalItens = expenses.data.total;
    const pageLimit = expenses.data.limit;

    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        sorter: (a, b) => a.title.length - b.title.length
      },
      {
        title: "Amount",
        dataIndex: "amount",
        sorter: (a, b) => a.amount - b.amount
      },
      {
        title: "Category",
        dataIndex: "category",
        sorter: (a, b) => a.category.length - b.category.length
      },
      {
        title: "Action",
        key: "_id",
        render: row => (
          <Button type="link" onClick={() => this.handleDelete(row)}>
            Delete
          </Button>
        )
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
