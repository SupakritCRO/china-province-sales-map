import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";
import interpolate from "color-interpolate"; // Import color-interpolate

interface ChinaProvinceMapProps {
  province: { name: string; value: number; geometry: any };
  onBack: () => void;
}

const stores = [
  { name: "Beijing Store 1", coordinates: [115.8074, 39.9042], province: "Beijing", sales: 100 },
  { name: "Beijing Store 2", coordinates: [116.1122, 40.42], province: "Beijing", sales: 58 },
  { name: "Beijing Store 3", coordinates: [116.274, 39.7042], province: "Beijing", sales: 78 },
  { name: "Beijing Store 4", coordinates: [116.8074, 40.2042], province: "Beijing", sales: 45 },
  { name: "Beijing Store 5", coordinates: [116.5074, 40.6042], province: "Beijing", sales: 30 },
  { name: "Shanghai Store 1", coordinates: [121.4737, 31.2304], province: "Shanghai", sales: 120 },
  { name: "Shanghai Store 2", coordinates: [121.4737, 31.2304], province: "Shanghai", sales: 95 },
  { name: "Guangzhou Store 1", coordinates: [113.2644, 23.1291], province: "Guangdong", sales: 85 },
  { name: "Guangzhou Store 2", coordinates: [113.2644, 23.1291], province: "Guangdong", sales: 70 },
  { name: "Chengdu Store 1", coordinates: [104.0665, 30.6595], province: "Sichuan", sales: 60 },
  { name: "Shanghai Store", coordinates: [121.4737, 31.2304], province: "Shanghai", sales: 110 },
  { name: "Guangzhou Store", coordinates: [113.2644, 23.1291], province: "Guangdong", sales: 42 },
  { name: "Chengdu Store", coordinates: [104.0665, 30.6595], province: "Sichuan", sales: 34 },
];

const ChinaProvinceMap: React.FC<ChinaProvinceMapProps> = ({ province, onBack }) => {
  const chartRef = useRef<ReactECharts>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    try {
      const provinceGeoJson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: { NAME_1: province.name },
            geometry: province.geometry,
          },
        ],
      };
      console.log("Registering map for", province.name, provinceGeoJson);
      echarts.registerMap(province.name, provinceGeoJson as any);
      setIsMapReady(true);
    } catch (error) {
      console.error(`Failed to register map for ${province.name}:`, error);
    }

    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.getEchartsInstance();
        chartInstance.dispose();
      }
    };
  }, [province]);

  // Filter stores for the selected province
  const provinceStores = stores.filter((store) => store.province === province.name);
  console.log("Province Stores:", provinceStores);

  // Define sales range and color scale
  const salesValues = provinceStores.map((store) => store.sales);
  const minSales = Math.min(...salesValues, 0);
  const maxSales = Math.max(...salesValues, 0);
  const colorScale = interpolate(["#FFC1C1", "#FF0000"]); // Light red to deep red


  const options: EChartsOption = {
    title: {
      text: `${province.name} Population`,
      subtext: `Population: ${province.value} million`,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        if (params.seriesType === "map") {
          return `${province.name}<br/>Population: ${province.value} million`;
        }
        if (params.seriesType === "scatter") {
          return `${params.data.name}<br/>Coordinates: [${params.data.value[0]}, ${params.data.value[1]}]<br/>Sales: ${params.data.sales}`;
        }
        return "";
      },
    },
    geo: {
      map: province.name,
      roam: true,
      label: {
        show: true,
        fontSize: 12,
        color: "#333",
      },
      itemStyle: {
        borderColor: "#FFFFFF",
        borderWidth: 0.75,
        areaColor: "#FFFF99", // light yellow background
      },
    },
    visualMap: {
      show: true,
      min: minSales,
      max: maxSales,
      left: "left",
      top: "bottom",
      text: ["High Sales", "Low Sales"],
      calculable: true,
      inRange: {
        color: ["#FFC1C1", "#FF0000"], // Mild red to very red
      },      
    },
    series: [
      {
        name: "Stores",
        type: "scatter",
        coordinateSystem: "geo",
        data: provinceStores.map((store) => ({
          name: store.name,
          value: store.coordinates,
          sales: store.sales,
          itemStyle: {
            color: colorScale((store.sales - minSales) / (maxSales - minSales)), // Dynamic color
            borderColor: "#FFFFFF",
            borderWidth: 1,
          },
        })),
        symbolSize: 16,
        label: {
          show: true,
          position: "top",
          formatter: "{b}",
          fontSize: 10,
          color: "#333",
          fontWeight: "bold",
          textBorderColor: "#FFFFFF",
          textBorderWidth: 2,
        },
        emphasis: {
          itemStyle: {
            borderColor: "#000000",
            borderWidth: 2,
          },
          label: {
            show: true,
          },
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isMapReady ? (
        <ReactECharts
          ref={chartRef}
          option={options}
          style={{ height: "100%", width: "100%" }}
          onChartReady={(chart) => {
            chart.hideLoading();
            console.log("Chart rendered with stores:", provinceStores);
          }}
        />
      ) : (
        <div>Loading province map...</div>
      )}
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "8px 16px",
          background: "#ffffff",
          border: "1px solid #333",
          borderRadius: "4px",
          color: "#333",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Back to China Map
      </button>
    </div>
  );
};

export default ChinaProvinceMap;