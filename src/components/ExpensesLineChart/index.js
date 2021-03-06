import React from "react";
// echarts
import ReactECharts from "echarts-for-react";
// redux
import { connect } from "react-redux";
import moment from "moment";

//moment
// import moment from "moment";
class ExpensesLineChart extends React.Component {
  render() {
    const { expenses } = this.props;
    const amounts = expenses.data.docs
      ? expenses.data.docs.map(item => item.amount)
      : [];

    const dates = expenses.data.docs
      ? expenses.data.docs.map(item =>
          moment(item.expense_at).format("MM-DD-YYYY")
        )
      : [];

    const option = {
      title: {
        text: "Expenses"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: dates
      },
      xAxis: {
        type: "category",
        data: dates
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Amount",
          data: amounts,
          type: "line",
          smooth: true,
          color: "#f186c1"
        }
      ]
    };

    return (
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={this.onChartReadyCallback}
      />
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps, {})(ExpensesLineChart);
