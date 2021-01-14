import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = ({ data }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Repository",
        yAxisName: "Forks",
        xAxisFontSize: "16px",
        yAxisFontSize: "16px",
        theme: "fusion",
        showCanvasBorder: "0",
        baseFontColor: "#000000",
        // canvasBgColor: "#000000",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart;
