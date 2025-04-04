import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import chinaGeoJson from '../data/china_map.json';
import { EChartsOption } from 'echarts';

interface ChinaMapProps {
  onProvinceSelect: (province: { name: string; value: number; geometry: any }) => void;
  totalLossMakingByProvince: Record<string, number>;
}

const ChinaMap: React.FC<ChinaMapProps> = ({ onProvinceSelect, totalLossMakingByProvince }) => {
  const chartRef = useRef<ReactECharts>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  // Generate map data using the provided totalLossMakingByProvince
  const mapData = (chinaGeoJson as any).features.map((feature: any) => {
    const name = feature.properties.name;
    const normalizedName = name?.replace(/\s+/g, ' ').trim();
    const value = totalLossMakingByProvince[normalizedName] || 0;
    return { name, value, geometry: feature.geometry };
  });

  useEffect(() => {
    try {
      echarts.registerMap('China', chinaGeoJson as any);
      setIsMapReady(true);
    } catch (error) {
      console.error('Failed to register China map:', error);
    }

    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.getEchartsInstance();
        chartInstance.dispose();
      }
    };
  }, []);

  const options: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => `${params.name}<br/>Total Loss Making: ${params.value || 'No data'} RMB`,
    },
    visualMap: {
      min: 0,
      max: 10000000,
      left: 'left',
      top: 'center',
      text: ['High', 'Low'],
      calculable: true,
      inRange: { color: ['#D3D3D3', '#FF0000'] },
      textStyle: {
        fontFamily: 'Satoshi, sans-serif',
        color: '#1F2A44', // cpg-black
      },
    },
    series: [
        {
          name: 'China Provinces',
          type: 'map',
          map: 'China',
          roam: false, // 🔧 Disable zoom and pan
          label: {
            show: true,
            fontSize: 8,
            color: '#333',
            fontFamily: 'Satoshi, sans-serif',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              color: '#333',
              fontFamily: 'Satoshi, sans-serif',
            },
            itemStyle: {
              areaColor: '#F53',
            },
          },
          itemStyle: {
            borderColor: '#FFFFFF',
            borderWidth: 0.75,
            areaColor: '#D3D3D3',
          },
          data: mapData,
        },
      ],
      
  };

  return (
    <div className="h-full w-full">
      {isMapReady ? (
        <ReactECharts
          ref={chartRef}
          option={options}
          style={{ height: '100%', width: '100%' }}
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
        <div className="flex items-center justify-center h-full">Loading China map...</div>
      )}
    </div>
  );
};

export default ChinaMap;