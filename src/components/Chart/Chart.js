import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint=>datapoint.value);
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
          key={data.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
//exporting to expensechart.js
