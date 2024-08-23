import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Rectangle,
  ComposedChart,
  Line,
} from "recharts";

export default class Chart_oneLine extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    const { data, x, y } = this.props;
    console.log(data);
    console.log(x, y);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 0,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"hour"} stroke="#90CAF9" />
          <YAxis stroke="#90CAF9" />
          <Tooltip />
          <Legend align="left" verticalAlign="top" height={40} />
          <Line
            type=""
            dataKey={"sales"}
            stroke="rgb(96 165 250)"
            strokeWidth={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
