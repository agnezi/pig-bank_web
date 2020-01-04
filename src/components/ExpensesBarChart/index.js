import React from "react";
import ReactECharts from "echarts-for-react";

class ExpensesBarChart extends React.Component {
  render() {
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
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

export default ExpensesBarChart;
