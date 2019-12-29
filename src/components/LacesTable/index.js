import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//antd
import { Table } from "antd";

//redux
import * as LacesActions from "../../store/ducks/laces/actions";

class LacesTable extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { laces } = this.props;
    const { loading } = this.props;
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

    const data = laces;
    return (
      <>
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          rowKey={"_id"}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  laces: state.laces.data,
  loading: state.laces.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LacesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LacesTable);
