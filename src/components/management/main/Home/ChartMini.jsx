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

export default class ChartMini extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="90%" height="100%">
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#90CAF9" />
          <YAxis stroke="#90CAF9" />
          <Tooltip />
          <Legend align="left" verticalAlign="top" height={60} />
          <Line
            type=""
            dataKey="Product"
            stroke="rgb(96 165 250)"
            strokeWidth={3}
          />
          <Line type="" dataKey="User" stroke="#FFA726" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
