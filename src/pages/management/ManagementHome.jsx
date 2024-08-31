import React from "react";
import Chart_bar from "../../components/management/main/Home/Chart_bar";
import ChartHeader from "../../components/management/main/Home/ChartHeader";
import Chart_oneLine from "../../components/management/main/Home/Chart_oneLine";
import Chart_twoLine from "../../components/management/main/Home/Chart_twoLine";
import Chart_fourLine from "../../components/management/main/Home/Chart_fourLine";

export default function ManagementHome() {
  console.log("hihi");
  const HourlySales = [
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

  const dailyVisitors = [
    { date: "1", visitors: 120 },
    { date: "2", visitors: 135 },
    { date: "3", visitors: 150 },
    { date: "4", visitors: 160 },
    { date: "5", visitors: 145 },
    { date: "6", visitors: 155 },
    { date: "7", visitors: 170 },
    { date: "8", visitors: 180 },
    { date: "9", visitors: 175 },
    { date: "10", visitors: 165 },
    { date: "11", visitors: 190 },
    { date: "12", visitors: 200 },
    { date: "13", visitors: 195 },
    { date: "14", visitors: 185 },
    { date: "15", visitors: 210 },
    { date: "16", visitors: 220 },
    { date: "17", visitors: 230 },
    { date: "18", visitors: 240 },
    { date: "19", visitors: 250 },
    { date: "20", visitors: 260 },
    { date: "21", visitors: 270 },
    { date: "22", visitors: 280 },
    { date: "23", visitors: 275 },
    { date: "24", visitors: 265 },
    { date: "25", visitors: 255 },
    { date: "26", visitors: 245 },
    { date: "27", visitors: 235 },
    { date: "28", visitors: 225 },
    { date: "29", visitors: 215 },
    { date: "30", visitors: 205 },
    { date: "31", visitors: 195 },
  ];
  const salesAndCustomersData = [
    { month: "Jan", sales: 12000, customers: 300 },
    { month: "Feb", sales: 15000, customers: 350 },
    { month: "Mar", sales: 18000, customers: 400 },
    { month: "Apr", sales: 20000, customers: 450 },
    { month: "May", sales: 17000, customers: 420 },
    { month: "Jun", sales: 22000, customers: 500 },
    { month: "Jul", sales: 21000, customers: 480 },
    { month: "Aug", sales: 24000, customers: 530 },
    { month: "Sep", sales: 23000, customers: 510 },
    { month: "Oct", sales: 25000, customers: 550 },
    { month: "Nov", sales: 27000, customers: 580 },
    { month: "Dec", sales: 30000, customers: 620 },
  ];
  const salesData = [
    { month: "Jan", Man: 4000, Woman: 2000, Accessory: 1500, Shoes: 2300 },
    { month: "Feb", Man: 3300, Woman: 2800, Accessory: 2000, Shoes: 3100 },
    { month: "Mar", Man: 4300, Woman: 2500, Accessory: 1700, Shoes: 3400 },
    { month: "Apr", Man: 4100, Woman: 2700, Accessory: 1800, Shoes: 3500 },
    { month: "May", Man: 3600, Woman: 2000, Accessory: 1900, Shoes: 2900 },
    { month: "Jun", Man: 3900, Woman: 3600, Accessory: 1600, Shoes: 3000 },
    { month: "Jul", Man: 4400, Woman: 2400, Accessory: 2200, Shoes: 2800 },
    { month: "Aug", Man: 4600, Woman: 3100, Accessory: 1700, Shoes: 3600 },
  ];

  return (
    <div className="flex flex-col min-w-[1080px] overflow-scroll gap-3 mb-4">
      <div className="w-full rounded-md bg-white shadow-md ">
        {/* 월별 판매량 */}
        <div className="px-6 pt-6">
          <ChartHeader
            title="Monthly Sales"
            count={{ num: 16500, unit: "$" }}
            text={"this month"}
            percent={7.12}
          />
        </div>
        <div className="w-full h-72 m-auto px-6 pt-1 ">
          <Chart_bar />
        </div>
      </div>
      <div className="flex gap-4 h-[300px]">
        <div className="w-1/2 bg-white rounded-md shadow-md ">
          {/* 시간대별 판매량 */}
          <div className="px-4 pt-4">
            <ChartHeader
              title="Hourly Sales"
              count={{ num: 3025, unit: "$" }}
              text={"Today"}
              percent={7.48}
            />
          </div>
          <div className="w-full h-52 m-auto px-4 pt-1 ">
            <Chart_oneLine
              data={HourlySales}
              allKey={getKey(HourlySales)[0]}
              color={"rgb(96 165 250)"}
            />
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/* 일별 방문자 수 */}
          <div className="px-4 pt-4">
            <ChartHeader
              title="Daily Visitors"
              count={{ num: 7395, unit: "Visitors" }}
              text={"Today"}
              percent={-1.85}
            />
          </div>
          <div className="w-full h-52 m-auto px-4 pt-1 ">
            <Chart_oneLine
              data={dailyVisitors}
              allKey={getKey(dailyVisitors)[0]}
              color={"#FFA726"}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 h-[300px]">
        <div className="w-1/2 bg-white rounded-md shadow-md ">
          {/* 판매량과 고객수 */}
          <div className="px-4 pt-4">
            <ChartHeader
              title="Sales & Customers"
              count={{ num: 46.55, unit: "$" }}
              text={"Sales per customer"}
              percent={2.42}
            />
          </div>
          <div className="w-full h-52 m-auto px-4 pt-1 ">
            <Chart_twoLine
              data={salesAndCustomersData}
              allKey={getKey(salesAndCustomersData)[0]}
            />
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-md shadow-md">
          {/* 카테고리별 판매량 */}
          <div className="px-4 pt-4">
            <ChartHeader
              title="Sales by Category"
              count={{ num: 13800, unit: "$" }}
              text={"Sale per category"}
              percent={2.99}
            />
          </div>
          <div className="w-full h-52 m-auto px-4 pt-1 ">
            <Chart_fourLine data={salesData} allKey={getKey(salesData)[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function getKey(data) {
  //* data : [{},{},{},{}, ... ]
  let allKey = data.map((obj) => Object.keys(obj));
  return allKey;
}
