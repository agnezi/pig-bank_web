import React from "react";
// echarts
import ReactECharts from "echarts-for-react";
// redux
import { connect } from "react-redux";
import moment from "moment";

//moment
// import moment from "moment";
class LacesLineChart extends React.Component {
  render() {
    const { laces } = this.props;
    const amounts = laces.data.docs
      ? laces.data.docs.map(item => item.amount)
      : [];

    const dates = laces.data.docs
      ? laces.data.docs.map(item =>
          moment(item.expense_at).format("MM-DD-YYYY")
        )
      : [];

    const option = {
      title: {
        text: "Laces"
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
  laces: state.laces
});

export default connect(mapStateToProps, {})(LacesLineChart);
