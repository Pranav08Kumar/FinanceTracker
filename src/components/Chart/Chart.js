import React, { useContext } from "react";
import AuthContext from "../Help/Auth-Context";
import ChartBar from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {
  const defVal = useContext(AuthContext);

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...dataPointValues);
  if (+props.barVal > 0) {
    totalMaximum = props.barVal;
  }
  if (defVal.isDefa === true) {
    totalMaximum = Math.max(...dataPointValues);
  }
  if (+props.barVal > 0) {
    totalMaximum = props.barVal;
  }
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
