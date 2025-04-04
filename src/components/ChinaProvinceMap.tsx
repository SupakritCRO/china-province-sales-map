import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import interpolate from 'color-interpolate';
import { storeLossMakingByProvince, storeCoordinates } from '../pages/LossMakingScanner';

interface ChinaProvinceMapProps {
  province: { name: string; value: number; geometry: any };
  onBack: () => void;
  onStoreSelect: (store: { name: string; value: number }) => void;
}

const ChinaProvinceMap: React.FC<ChinaProvinceMapProps> = ({ province, onBack, onStoreSelect }) => {
  const chartRef = useRef<ReactECharts>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    try {
      const provinceGeoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { NAME_1: province.name },
            geometry: province.geometry,
          },
        ],
      };
      console.log('Registering map for', province.name, provinceGeoJson);
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
  const provinceStores = storeLossMakingByProvince[province.name] || [];
  console.log('Province Stores:', provinceStores);

  // Define loss range and color scale
  const lossValues = provinceStores.map((store) => store.value);
  const minLoss = Math.min(...lossValues, 0);
  const maxLoss = Math.max(...lossValues, 0);
  const colorScale = interpolate(['#FFC1C1', '#FF0000']); // Light red to deep red

  const options: EChartsOption = {
    title: {
      text: `${province.name} Loss-Making`,
      left: 'center',
      textStyle: {
        fontFamily: 'Satoshi, sans-serif',
        color: '#1F2A44',
      },
      subtextStyle: {
        fontFamily: 'Satoshi, sans-serif',
        color: '#374151',
      },
    },
    visualMap: {
      min: minLoss,
      max: maxLoss,
      left: 'left',
      top: 'center',
      text: ['High', 'Low'],
      calculable: true,
      inRange: {
        color: ['#FFC1C1', '#FF0000'], // Light red to deep red
      },
      textStyle: {
        fontFamily: 'Satoshi, sans-serif',
        color: '#1F2A44', // cpg-black
      },
      itemWidth: 20,
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        if (params.seriesType === 'map') {
          return `${province.name}<br/>Total Loss: ${(province.value / 1e6).toFixed(2)}M RMB`;
        }
        if (params.seriesType === 'scatter') {
          return `${params.data.name}<br/>Coordinates: [${params.data.value[0]}, ${params.data.value[1]}]<br/>Loss: ${(params.data.loss / 1e6).toFixed(2)}M RMB`;
        }
        return '';
      },
    },
    geo: {
      map: province.name,
      roam: false, // Disable zoom and pan
      label: {
        show: true,
        fontSize: 12,
        color: '#333',
        fontFamily: 'Satoshi, sans-serif',
      },
      itemStyle: {
        borderColor: '#FFFFFF',
        borderWidth: 0.75,
        areaColor: '#FFFF99',
      },
    },
    series: [
      {
        name: 'Stores',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: provinceStores
          .filter((store) => storeCoordinates[store.name])
          .map((store) => ({
            name: store.name,
            value: storeCoordinates[store.name],
            loss: store.value,
            itemStyle: {
              color: colorScale((store.value - minLoss) / (maxLoss - minLoss)),
              borderColor: '#FFFFFF',
              borderWidth: 1,
            },
          })),
        symbolSize: 16,
        label: {
          show: true,
          position: 'top',
          formatter: '{b}',
          fontSize: 10,
          color: '#333',
          fontWeight: 'bold',
          fontFamily: 'Satoshi, sans-serif',
          textBorderColor: '#FFFFFF',
          textBorderWidth: 2,
        },
        emphasis: {
          itemStyle: {
            borderColor: '#000000',
            borderWidth: 2,
          },
          label: {
            show: true,
          },
        },
      },
    ],
  };

  // Handle click events on the chart
  const handleChartClick = (params: any) => {
    if (params.seriesType === 'scatter') {
      onStoreSelect({ name: params.data.name, value: params.data.loss });
    }
  };

  return (
    <div className="relative w-full h-full">
      {isMapReady ? (
        <ReactECharts
          ref={chartRef}
          option={options}
          style={{ height: '100%', width: '100%' }}
          onChartReady={(chart) => {
            chart.hideLoading();
            console.log('Chart rendered with stores:', provinceStores);
          }}
          onEvents={{ click: handleChartClick }}
        />
      ) : (
        <div className="flex items-center justify-center h-full">Loading province map...</div>
      )}
      <button
        onClick={onBack}
        className="absolute top-5 left-5 px-4 py-2 bg-cpg-white border border-cpg-gray-300 rounded-md text-cpg-black shadow-sm hover:bg-cpg-gray-100 transition-colors"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        Back to China Map
      </button>
    </div>
  );
};

export default ChinaProvinceMap;
