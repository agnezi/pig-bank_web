import React, { Component } from "react";

//antd
import { Table, Button } from "antd";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LacesActions from "../../store/ducks/laces/actions";

class LacesTable extends Component {
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
    const { loading, loadRequest, laces } = this.props;
    const totalItens = laces.data.total;
    const pageLimit = laces.data.limit;
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

    const data = laces.data.docs;

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
  laces: state.laces,
  loading: state.laces.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LacesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LacesTable);
