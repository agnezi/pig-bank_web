import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//antd
import { Table } from "antd";

//redux
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

  render() {
    const { loading, loadRequest, laces } = this.props;
    const totalItens = laces.data.total;
    const pageLimit = laces.data.limit;
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
