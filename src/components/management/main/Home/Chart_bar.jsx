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
    month: "Jan",
    Man: 4000,
    Woman: 2400,
    Accessory: 2400,
    Shoes: 3000,
    User: 3500,
  },
  {
    month: "Feb",
    Man: 3200,
    Woman: 1700,
    Accessory: 2600,
    Shoes: 2800,
    User: 4600,
  },
  {
    month: "Mar",
    Man: 4500,
    Woman: 2900,
    Accessory: 2800,
    Shoes: 3100,
    User: 5700,
  },
  {
    month: "Apr",
    Man: 3800,
    Woman: 3100,
    Accessory: 2500,
    Shoes: 2700,
    User: 5600,
  },
  {
    month: "May",
    Man: 4200,
    Woman: 3300,
    Accessory: 2900,
    Shoes: 3200,
    User: 6900,
  },
  {
    month: "Jun",
    Man: 2600,
    Woman: 3500,
    Accessory: 3100,
    Shoes: 1400,
    User: 6600,
  },
  {
    month: "Jul",
    Man: 4800,
    Woman: 3700,
    Accessory: 3200,
    Shoes: 3600,
    User: 7000,
  },
  {
    month: "Aug",
    Man: 5000,
    Woman: 3900,
    Accessory: 3400,
    Shoes: 3800,
    User: 6000,
  },
];

export default class Chart_bar extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#90CAF9" />
          <YAxis stroke="#90CAF9" />
          <Tooltip />
          <Legend align="left" verticalAlign="top" height={50} />
          <Bar
            dataKey="Man"
            fill="rgb(96 165 250)"
            // activeBar={<Rectangle fill="rgb(147 197 253)" />}
            barSize={40}
            stackId={1}
          />
          <Bar
            dataKey="Woman"
            fill="rgb(248 113 113)"
            // activeBar={<Rectangle fill="rgb(147 197 253)" />}
            barSize={40}
            stackId={1}
          />
          <Bar
            dataKey="Accessory"
            fill=" rgb(251 191 36)"
            // activeBar={<Rectangle fill="rgb(147 197 253)" />}
            barSize={40}
            stackId={1}
          />
          <Bar
            dataKey="Shoes"
            fill="rgb(163 230 53)"
            // activeBar={<Rectangle fill="rgb(147 197 253)" />}
            barSize={40}
            stackId={1}
          />

          {/* <Line type="" dataKey="User" stroke="#FFA726" strokeWidth={3} /> */}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
