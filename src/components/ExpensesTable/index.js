import React, { useEffect } from "react";

import { Table, Button } from "antd";

import { useSelector, useDispatch } from "react-redux";

import * as ExpensesActions from "../../store/ducks/expenses/actions";

const ExpensesTable = () => {
  const dispatch = useDispatch();
  const { expenses, loading } = useSelector(state => state);

  useEffect(() => {
    const getExpenses = async () => {
      await dispatch(ExpensesActions.loadRequest());
    };
    getExpenses();
  }, [dispatch]);

  const totalItens = expenses.data.total;
  const pageLimit = expenses.data.limit;
  const data = expenses.data.docs;

  const handleDelete = row => {
    dispatch(ExpensesActions.deleteRequest({ id: row._id }));
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
      dispatch(ExpensesActions.loadRequest({ page }));
    },
    onShowSizeChange: (current, size) => {
      dispatch(ExpensesActions.loadRequest({ page: current, pageSize: size }));
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

export default ExpensesTable;
