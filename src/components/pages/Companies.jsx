import React from "react";
import {
  LayoutGrid,
  Bell,
  Briefcase,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";
import Header from "../UserDashboardHeader.jsx";
import Footer from "./../../components/Footer.jsx";
import Sidebar from "../UserDashboardSidebar.jsx";
import companyLogo from "./../../assets/images/company_logo.png";
import companyCardImage from "./../../assets/images/company_img.jpg";

const CompaniesPage = () => {
  const companies = [
    {
      id: 1,
      name: "Infosys",
      position: "Java Full Stack Developer",
      location: "Mumbai/Bangalore",
      experience: "3-6 Years",
    },
    {
      id: 2,
      name: "TCS",
      position: "SDE-II",
      location: "Pune",
      experience: "2-3 Years",
    },
    {
      id: 3,
      name: "Google",
      position: "Product Manager",
      location: "Chennai",
      experience: "5-6 Years",
    },
    {
      id: 4,
      name: "Microsoft",
      position: "SDE-III",
      location: "Mumbai",
      experience: "7-8 Years",
    },
    {
      id: 5,
      name: "Facebook",
      position: "Product Engineer",
      location: "Bangalore",
      experience: "3-4 Years",
    },
    {
      id: 6,
      name: "Deloitte",
      position: "SDE-I",
      location: "Gurugram",
      experience: "1-2 Years",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-1">
              Companies Registered With Us
            </h1>
            <div className="h-1 w-32 bg-red-500 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={companyCardImage}
                      alt="Company Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex -mt-12 mb-3">
                      <img
                        src={companyLogo}
                        alt={company.name}
                        className="h-16 bg-white p-2 rounded-md shadow-md"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-blue-600 mb-2">
                      {company.name} - {company.position}
                    </h3>
                    <div className="flex justify-between text-gray-600 text-sm mt-4">
                      <span>{company.location}</span>
                      <span>{company.experience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompaniesPage;
