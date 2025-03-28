import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import chinaGeoJson from "./data/kaggle_china_map.json";
import { EChartsOption } from "echarts";

const provincePopulations: Record<string, number> = {
  Anhui: 61.03,
  Beijing: 21.89,
  Chongqing: 32.05,
  Fujian: 41.54,
  Gansu: 24.62,
  Guangdong: 126.57,
  Guangxi: 50.13,
  Guizhou: 38.56,
  Hainan: 10.08,
  Hebei: 74.61,
  Heilongjiang: 31.85,
  Henan: 98.72,
  Hubei: 58.30,
  Hunan: 66.44,
  "Nei Mongol": 24.04,
  Jiangsu: 85.15,
  Jiangxi: 45.09,
  Jilin: 24.07,
  Liaoning: 42.59,
  Ningxia: 7.20,
  Qinghai: 5.92,
  Shaanxi: 39.52,
  Shandong: 101.63,
  Shanghai: 24.87,
  Shanxi: 34.91,
  Sichuan: 83.67,
  Tianjin: 13.86,
  Xizang: 3.64,
  "Xinjiang Uygur": 25.85,
  Yunnan: 47.20,
  Zhejiang: 64.56,
};

const mapData = (chinaGeoJson as any).features.map((feature: any) => {
  const name = feature.properties.name;
  const normalizedName = name?.replace(/\s+/g, " ").trim();
  const value = provincePopulations[normalizedName] || 0;
  return { name, value, geometry: feature.geometry };
});

interface ChinaMapProps {
  onProvinceSelect: (province: { name: string; value: number; geometry: any }) => void;
}

const ChinaMap: React.FC<ChinaMapProps> = ({ onProvinceSelect }) => {
  const chartRef = useRef<ReactECharts>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    try {
      echarts.registerMap("China", chinaGeoJson as any);
      setIsMapReady(true);
    } catch (error) {
      console.error("Failed to register China map:", error);
    }

    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.getEchartsInstance();
        chartInstance.dispose();
      }
    };
  }, []);

  const options: EChartsOption = {
    title: {
      text: "China Provinces Population",
      subtext: "Click a province to zoom in",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => `${params.name}<br/>Population: ${params.value || "No data"} million`,
    },
    visualMap: {
      min: 0,
      max: 150,
      left: "left",
      top: "center",
      
      text: ["High", "Low"],
      calculable: true,
      inRange: { color: ["#D3D3D3", "#FF0000"] },
    },
    series: [
      {
        name: "China Provinces",
        type: "map",
        map: "China",
        roam: true,
        label: { show: true, fontSize: 8, color: "#333" },
        emphasis: {
          label: { show: true, fontSize: 10, color: "#333" },
          itemStyle: { areaColor: "#F53" },
        },
        itemStyle: { borderColor: "#FFFFFF", borderWidth: 0.75, areaColor: "#D3D3D3" },
        data: mapData,
      },
    ],
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isMapReady ? (
        <ReactECharts
          ref={chartRef}
          option={options}
          style={{ height: "100%", width: "100%" }}
          onChartReady={(chart) => chart.hideLoading()}
          onEvents={{
            click: (params: any) => {
              const province = mapData.find((d: any) => d.name === params.name);
              if (province) {
                onProvinceSelect(province);
              }
            },
          }}
        />
      ) : (
        <div>Loading China map...</div>
      )}
    </div>
  );
};

export default ChinaMap;