import React from 'react';
import PageHeader from '../components/PageHeader';
import BarChart from '../components/BarChart';

const Home: React.FC = () => {
  // Data for the first row (stats boxes)
  const stats = [
    { title: 'Sales', value: '5.5B' },
    { title: 'Profit', value: '0.8B' },
    { title: 'Profit %', value: '14.5%' },
    { title: 'Number of Customers', value: '208K' },
  ];

  // Mock data for the bar charts
  const topSalesData = {
    categories: ['10014', '10017', '10023', '10029', '10035', '10042', '10048', '10053', '10059', '10064'],
    values: [450, 420, 390, 360, 330, 300, 280, 260, 240, 220], // Sales in thousands
  };

  const bottomSalesData = {
    categories: ['10042', '10048', '10053', '10059', '10064', '10070', '10075', '10080', '10085', '10090'],
    values: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5], // Sales in thousands
  };

  // Data for the third row (new boxes)
  const lossStats = [
    { title: 'Number of loss-making products', value: '634' },
    { title: 'Loss-making products loss amount', value: '16M' },
  ];

  return (
    <div className="text-cpg-black">
      <PageHeader title="Home" />

      {/* Main Content */}
      <div className="p-8">
        {/* Grid Layout: 5 rows, 4 columns (for desktop) */}
        <div className="grid grid-cols-4 gap-4">
          {/* First Row: Stats Boxes */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-cpg-white border-2 border-cpg-green rounded-xl p-6 flex flex-col items-center justify-center shadow-sm"
            >
              <h3
                className="text-sm font-semibold text-cpg-gray-700 tracking-wide underline decoration-2 decoration-cpg-green underline-offset-4 pb-1 mb-3"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {stat.title}
              </h3>
              <p
                className="text-4xl font-bold text-cpg-black"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {stat.value}
              </p>
            </div>
          ))}

          {/* Second Row: Top 10 Sales Branches (Green, spans 2 columns) */}
          <div className="col-span-2 h-96 bg-cpg-white border-2 border-cpg-green rounded-xl p-6 shadow-sm">
            <BarChart
              title="Top 10 Sales Branches"
              data={topSalesData}
              barColor="green"
              orientation="horizontal"
            />
          </div>

          {/* Second Row: Bottom 10 Sales Branches (Red, spans 2 columns) */}
          <div className="col-span-2 h-96 bg-cpg-white border-2 border-cpg-green rounded-xl p-6 shadow-sm">
            <BarChart
              title="Bottom 10 Sales Branches"
              data={bottomSalesData}
              barColor="red"
              orientation="horizontal"
            />
          </div>

          {/* Third Row: Loss Stats Boxes (Columns 1 and 2) */}
          {lossStats.map((stat, index) => (
            <div
              key={index}
              className="bg-cpg-white border-2 border-cpg-green rounded-xl p-6 flex flex-col items-center justify-center shadow-sm"
            >
              <h3
                className="text-sm font-semibold text-cpg-gray-700 tracking-wide underline decoration-2 decoration-cpg-green underline-offset-4 pb-1 mb-3 text-center"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {stat.title}
              </h3>
              <p
                className="text-4xl font-bold text-cpg-black"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {stat.value}
              </p>
            </div>
          ))}

          {/* Third Row: Placeholder for Columns 3 and 4 */}
          <div className="col-span-2 h-36 bg-cpg-gray-100 rounded-xl flex items-center justify-center">
            <p>Third Row Columns 3-4 Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;