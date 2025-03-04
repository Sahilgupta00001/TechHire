import React from 'react';
import { ChevronUp } from 'lucide-react';

const StatCard = ({ title, value, change, period, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
      <div className="flex items-center text-xs">
        <ChevronUp size={14} className="text-green-500 mr-1" />
        <span className="text-green-500 font-medium">{change}</span>
        {period && (
          <span className="text-gray-500 ml-1">vs last {period}</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;