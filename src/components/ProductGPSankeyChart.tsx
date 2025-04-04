import React from 'react';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';

const ProductGPSankeyChart: React.FC = () => {
  // Define the nodes for the Sankey diagram
  const nodes = [
    { name: 'Total GP', itemStyle: { color: '#F44336' } },  // Red
    { name: 'Indirect', itemStyle: { color: '#4CAF50' } },  // Green
    { name: 'Direct', itemStyle: { color: '#F44336' } },    // Red
    { name: 'Vendor Payment', itemStyle: { color: '#C8E6C9' } },
    { name: 'Rebate', itemStyle: { color: '#C8E6C9' } },
    { name: 'Online Contribution', itemStyle: { color: '#C8E6C9' } },
    { name: 'D&A', itemStyle: { color: '#C8E6C9' } },
    { name: 'Shrinkage', itemStyle: { color: '#FFCDD2' } },
    { name: 'Sales-Cost', itemStyle: { color: '#FFCDD2' } },
    { name: 'Promotion Coupon', itemStyle: { color: '#FFCDD2' } },
  ];

  // Define the links with mock values
  const links = [
    { source: 'Total GP', target: 'Indirect', value: 120 },
    { source: 'Total GP', target: 'Direct', value: 80 },
    { source: 'Indirect', target: 'Vendor Payment', value: 30 },
    { source: 'Indirect', target: 'Rebate', value: 20 },
    { source: 'Indirect', target: 'Online Contribution', value: 50 },
    { source: 'Indirect', target: 'D&A', value: 20 },
    { source: 'Direct', target: 'Shrinkage', value: 30 },
    { source: 'Direct', target: 'Sales-Cost', value: 20 },
    { source: 'Direct', target: 'Promotion Coupon', value: 30 },
  ];

  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: (params: any) => {
        // Sankey tooltips often show node vs. link data differently
        if (params.dataType === 'node') {
          return `${params.name}`;
        } else if (params.dataType === 'edge') {
          return `${params.data.source} → ${params.data.target} : ${params.data.value}`;
        }
        return '';
      },
    },
    series: [
      {
        type: 'sankey',
        data: nodes,
        links: links,
        // You can adjust these layout properties for aesthetics
        focusNodeAdjacency: true,
        nodeWidth: 20,
        nodeGap: 12,
        layoutIterations: 32,
        label: {
          color: '#333',
          fontFamily: 'Satoshi, sans-serif',
        },
        lineStyle: {
          color: 'gradient',
          opacity: 0.4,
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default ProductGPSankeyChart;
