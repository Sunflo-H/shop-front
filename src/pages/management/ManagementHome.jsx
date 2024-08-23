import React from "react";
import Chart from "../../components/management/main/Home/Chart";
import ChartMini from "../../components/management/main/Home/ChartMini";
import ChartHeader from "../../components/management/main/Home/ChartHeader";

export default function ManagementHome() {
  const data1 = [
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
      <div className="flex justify-center items-center w-full h-[370px] rounded-md bg-white shadow-md">
        {/* 매출량, 신규 고객 차트*/}
        <Chart />
      </div>
      <div className="flex gap-3 h-[300px] ">
        <div className="w-1/2 bg-white rounded-md shadow-md pt-6 px-4">
          <ChartHeader
            title="카테고리별 상품 개수"
            count={{ num: 20, unit: "Users" }}
            text={"this month"}
            percent={10}
          />
          {/* 카테고리별 상품 개수 */}
          <ChartMini data={data1} />
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/* 신규 고객 수 */}
          <ChartMini data={data2} />
        </div>
      </div>
      <div className="flex gap-4 h-[300px]">
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/* 카테고리별 판매량 */}
          <ChartMini data={data3} />
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/* 시간대별 판매량 */}
          <ChartMini data={data4} />
        </div>
      </div>
      <div className="flex gap-4 h-[300px]">
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/*  */}
          <ChartMini data={data5} />
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          <ChartMini data={data6} />
        </div>
      </div>
    </div>
  );
}
