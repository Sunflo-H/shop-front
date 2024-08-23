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

export default class Chart_fourLine extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    const { data, allKey } = this.props;

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
          <XAxis dataKey={allKey[0]} stroke="#90CAF9" />
          <YAxis stroke="#90CAF9" />
          <Tooltip />
          <Legend align="left" verticalAlign="top" height={40} />
          <Line
            type=""
            dataKey={allKey[1]}
            stroke="rgb(96 165 250)"
            strokeWidth={3}
          />
          <Line
            type=""
            dataKey={allKey[2]}
            stroke="rgb(248 113 113)"
            strokeWidth={3}
          />
          <Line
            type=""
            dataKey={allKey[3]}
            stroke="rgb(251 191 36)"
            strokeWidth={3}
          />
          <Line
            type=""
            dataKey={allKey[4]}
            stroke="rgb(163 230 53)"
            strokeWidth={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
