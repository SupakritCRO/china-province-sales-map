import React from 'react';
import ReactECharts from 'echarts-for-react';

// Define the shape of the chart data
interface ChartData {
  categories: string[]; // e.g., ["Category A", "Category B", "Category C"]
  values: number[]; // e.g., [120, 200, 150]
}

interface BarChartProps {
  title: string;
  data: ChartData;
  barColor?: string; // e.g., "green", "red", or a hex value
  orientation?: 'horizontal' | 'vertical'; // New prop to control direction
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  barColor = '#00A651', // Default to cpg-green
  orientation = 'horizontal', // Default orientation
}) => {
  const resolvedBarColor =
    barColor === 'green'
      ? '#00A651' // cpg-green
      : barColor === 'red'
      ? '#EF4444' // cpg-error-500
      : barColor;

  const isHorizontal = orientation === 'horizontal';

  const option = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        fontFamily: 'Satoshi, sans-serif',
        color: '#1F2A44', // cpg-black
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '10%',
      right: '5%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: isHorizontal
      ? {
          type: 'value',
          axisLabel: {
            color: '#374151',
            fontFamily: 'Satoshi, sans-serif',
          },
          axisLine: {
            lineStyle: {
              color: '#D1D5DB',
            },
          },
        }
      : {
          type: 'category',
          data: data.categories,
          axisLabel: {
            color: '#374151',
            fontFamily: 'Satoshi, sans-serif',
          },
          axisLine: {
            lineStyle: {
              color: '#D1D5DB',
            },
          },
        },
    yAxis: isHorizontal
      ? {
          type: 'category',
          data: data.categories,
          axisLabel: {
            color: '#374151',
            fontFamily: 'Satoshi, sans-serif',
          },
          axisLine: {
            lineStyle: {
              color: '#D1D5DB',
            },
          },
        }
      : {
          type: 'value',
          axisLabel: {
            color: '#374151',
            fontFamily: 'Satoshi, sans-serif',
          },
          axisLine: {
            lineStyle: {
              color: '#D1D5DB',
            },
          },
        },
    series: [
      {
        name: title,
        type: 'bar',
        data: data.values,
        itemStyle: {
          color: resolvedBarColor,
        },
        barWidth: '60%',
        label: {
          show: true,
          position: isHorizontal ? 'right' : 'top',
          color: '#1F2A44',
          fontFamily: 'Satoshi, sans-serif',
        },
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <ReactECharts
        option={option}
        style={{ width: '100%', height: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default BarChart;
