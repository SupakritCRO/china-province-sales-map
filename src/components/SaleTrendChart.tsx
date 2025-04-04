import ReactECharts from "echarts-for-react";

export default function SaleTrendChart() {
  // Generate dates for the last 7 days (formatted as YYYY-MM-DD)
  const today = new Date();
  const dates: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    dates.push(d.toISOString().split("T")[0]);
  }

  // Generate random sales data for each date
  const salesData = dates.map(() => Math.floor(Math.random() * 1000) + 100);

  // ECharts option for a compact line chart without axis labels or ticks
  const option = {
    grid: { left: 0, right: 0, top: 0, bottom: 0 },
    xAxis: {
      type: "category",
      data: dates,
      show: false, // Hide the x-axis
    },
    yAxis: {
      type: "value",
      show: false, // Hide the y-axis
    },
    series: [
      {
        data: salesData,
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          color: "#66BD80", // using CI cpg-green-500
          width: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
