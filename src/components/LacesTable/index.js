import React, { useEffect } from "react";

//antd
import { Table, Button } from "antd";

//redux
import { useSelector, useDispatch } from "react-redux";
import * as LacesActions from "../../store/ducks/laces/actions";

const LacesTable = () => {
  const dispatch = useDispatch();
  const { laces, loading } = useSelector(state => state);

  useEffect(() => {
    const getLaces = async () => {
      await dispatch(LacesActions.loadRequest());
    };
    getLaces();
  }, [dispatch]);

  const totalItens = laces.data.total;
  const pageLimit = laces.data.limit;
  const data = laces.data.docs;

  const handleDelete = row => {
    dispatch(LacesActions.deleteRequest({ id: row._id }));
  };

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
        <Button type="link" onClick={() => handleDelete(row)}>
          Delete
        </Button>
      )
    }
  ];

  const paginationConfig = {
    pageSize: pageLimit,
    total: totalItens,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    onChange: (page, pageSize) => {
      dispatch(LacesActions.loadRequest({ page }));
    },
    onShowSizeChange: (current, size) => {
      dispatch(LacesActions.loadRequest({ page: current, pageSize: size }));
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
};

export default LacesTable;
