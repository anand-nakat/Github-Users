import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = ({ data }) => {
  const chartConfigs = {
    type: "doughnut3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars per Language",
        theme: "fusion",
        decimals: 0,
        showPercentValues: 0,
        doughnutRadius: "35%",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart;
