import React, { useState } from "react";
import { Search, Bell } from "lucide-react";

import Header from "../CompanyDashboardHeader.jsx";
import Sidebar from "../CompanyDashboardSidebar.jsx";
import StatCard from "./../../components/CompanyDashboard/StatCard.jsx";
import AnalyticsChart from "./../../components/CompanyDashboard/AnalyticsChart.jsx";
import CandidatePipeline from "./../../components/CompanyDashboard/CandidatePipeline.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", active: activeTab === "Home" },
    { name: "Jobs Postings", active: activeTab === "Jobs Postings" },
    { name: "Applications", active: activeTab === "Applications" },
    { name: "Assessments", active: activeTab === "Assessments" },
    { name: "Interviews", active: activeTab === "Interviews" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Company Dashboard</h1>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search for job postings, candidates, or assessments..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-[32rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <StatCard
                  title="Active Jobs"
                  value="24"
                  change="+12%"
                  period="month"
                  color="text-purple-600"
                />
                <StatCard
                  title="Total Applications"
                  value="842"
                  change="+8%"
                  period="month"
                  color="text-blue-600"
                />
                <StatCard
                  title="Interviews Scheduled"
                  value="38"
                  change="+6%"
                  period="month"
                  color="text-green-600"
                />
                <StatCard
                  title="Time to Hire"
                  value="18d"
                  change="faster than avg"
                  period=""
                  color="text-orange-500"
                />
              </div>

              {/* Analytics Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold mr-6">
                    Recruitment Analytics
                  </h2>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Applications</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Interviews</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Hires</span>
                    </div>
                  </div>
                </div>
                <AnalyticsChart />
              </div>

              {/* Candidate Pipeline */}
              <div>
                <h2 className="text-xl font-bold mb-4">Candidate Pipeline</h2>
                <CandidatePipeline />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
