import React from 'react';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header
      className="py-6 px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Title */}
        <h1
          className="text-4xl font-bold text-cpg-black tracking-tight"
          style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
        >
          {title}
        </h1>

        {/* Decorative Element */}
        <div className="flex items-center space-x-2">
          <span className="h-1 w-12 bg-cpg-green rounded-full" />
          <span className="h-1 w-4 bg-cpg-green-dark rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;