import React from "react";

const CandidatePipeline = () => {
  const stages = [
    { name: "Applied", count: 245, color: "text-purple-600" },
    { name: "Screened", count: 180, color: "text-blue-500" },
    { name: "Interview", count: 85, color: "text-green-600" },
    { name: "Offer", count: 32, color: "text-amber-500" },
    { name: "Hired", count: 28, color: "text-red-500" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {stages.map((stage, index) => (
        <div key={index} className="">
          <div className={`text-2xl font-bold ${stage.color} mb-1`}>
            {stage.count}
          </div>
          <div className="text-sm text-gray-600">{stage.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CandidatePipeline;
