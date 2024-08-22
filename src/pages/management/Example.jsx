import React, { PureComponent } from "react";
import {
  BarChart,
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

const data = [
  {
    name: "Jan",
    User: 4000,
    Product: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    User: 3000,
    Product: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    User: 2000,
    Product: 1800,
    amt: 2290,
  },
  {
    name: "Apr",
    User: 2780,
    Product: 3908,
    amt: 2000,
  },
  {
    name: "May",
    User: 1890,
    Product: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    User: 2390,
    Product: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    User: 3490,
    Product: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Product"
            fill="rgb(96 165 250)"
            activeBar={<Rectangle fill="rgb(147 197 253)" />}
            barSize={40}
          />

          <Line type="" dataKey="User" stroke="#FFA726" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
