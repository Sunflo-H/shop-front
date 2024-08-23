import React from "react";
import Chart_bar from "../../components/management/main/Home/Chart_bar";
import ChartMini from "../../components/management/main/Home/ChartMini";
import ChartHeader from "../../components/management/main/Home/ChartHeader";
import Chart_pie from "../../components/management/main/Home/Chart_pie";
import Chart_oneLine from "../../components/management/main/Home/Chart_oneLine";

export default function ManagementHome() {
  const data1 = [
    { hour: "00:00", sales: 120 },
    { hour: "01:00", sales: 90 },
    { hour: "02:00", sales: 70 },
    { hour: "03:00", sales: 60 },
    { hour: "04:00", sales: 50 },
    { hour: "05:00", sales: 80 },
    { hour: "06:00", sales: 100 },
    { hour: "07:00", sales: 130 },
    { hour: "08:00", sales: 150 },
    { hour: "09:00", sales: 180 },
    { hour: "10:00", sales: 200 },
    { hour: "11:00", sales: 220 },
    { hour: "12:00", sales: 250 },
    { hour: "13:00", sales: 270 },
    { hour: "14:00", sales: 240 },
    { hour: "15:00", sales: 220 },
    { hour: "16:00", sales: 210 },
    { hour: "17:00", sales: 230 },
    { hour: "18:00", sales: 260 },
    { hour: "19:00", sales: 280 },
    { hour: "20:00", sales: 300 },
    { hour: "21:00", sales: 290 },
    { hour: "22:00", sales: 250 },
    { hour: "23:00", sales: 220 },
  ];
  const data2 = [
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
  const data3 = [
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
  const data4 = [
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
  const data5 = [
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
  const data6 = [
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
  return (
    <div className="flex flex-col min-w-[1080px] overflow-scroll gap-3">
      <div className="w-full rounded-md bg-white shadow-md ">
        {/* 카테고리별 판매량 */}
        <div className="px-6 pt-6">
          <ChartHeader
            title="Monthly Sales"
            count={{ num: 1800, unit: "$" }}
            text={"this month"}
            percent={7}
          />
        </div>
        <div className="w-full h-72 m-auto px-6 pt-1 ">
          <Chart_bar />
        </div>
      </div>
      <div className="flex gap-4 h-[300px]">
        <div className="w-1/2 bg-white rounded-md shadow-md ">
          <div className="px-4 pt-4">
            {/* 시간대별 판매량 */}
            <ChartHeader
              title="Hourly Sales by Day"
              count={{ num: 3000, unit: "$" }}
              text={"today"}
              percent={10}
            />
          </div>
          <div className="w-full h-52 m-auto px-4 pt-1 ">
            <Chart_oneLine
              data={data1}
              x={getKey(data1)[0]}
              y={getKey(data1)[1]}
            />
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          <div className="px-4 pt-4">
            {/* 시간대별 판매량 */}
            <ChartHeader
              title="Hourly Sales by Day"
              count={{ num: 1800, unit: "$" }}
              text={"this month"}
              percent={7}
            />
          </div>
          <div className="w-full h-52 m-auto px-4 pt-1 ">
            <ChartMini data={data4} />
          </div>
        </div>
      </div>
      <div className="flex gap-3 h-[300px] ">
        <div className="w-1/2 bg-white rounded-md shadow-md pt-6 px-4 ">
          <ChartHeader title="고객 비율" />
          {/* 카테고리별 상품 개수 */}
          <div className="w-full h-[200px] border border-red-500">
            <Chart_pie data={data1} />
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/* 신규 고객 수 */}
          <ChartMini data={data2} />
        </div>
      </div>
      <div className="flex gap-4 h-[300px]">
        <div className="w-1/2 bg-white rounded-md shadow-md">
          <ChartMini data={data5} />
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          <ChartMini data={data6} />
        </div>
      </div>
    </div>
  );
}

function getKey(data) {
  // data : [{},{},{},{}, ... ]
  let allKey = data.map((obj) => Object.keys(obj));
  return allKey;
}
