import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  FileText,
  Share2,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  Download,
  Edit,
  Plus,
} from "lucide-react";
import Header from "../UserDashboardHeader.jsx";
import Footer from "./../../components/Footer.jsx";
import Sidebar from "./../../components/Sidebar.jsx";
import userImage from "./../../assets/images/user.svg";

const CandidateProfile = () => {
  const candidateData = {
    name: "Sumit Desai",
    phone: "7800181112",
    location: "Mumbai",
    profileCompletion: 79,
    atsScore: 60,
    matched: {
      items: ["Education", "Skills", "Experience"],
      icon: <CheckCircle className="text-green-500" size={20} />,
    },
    against: {
      items: ["Location", "Salary expectation"],
      icon: <XCircle className="text-red-500" size={20} />,
    },
    skills: "HTML, CSS, Java, JavaScript, React, Spring",
    education: "2025 Bachelors of engineering, Mumbai University",
    experience: "1 Year",
    salary: "4 Lakhs Current / 8 Lakhs Expected",
    noticePeriod: "30 Days",
    documents: [
      { name: "Resume", verified: true },
      { name: "Cover Letter", verified: false },
      { name: "Attachments", verified: false },
    ],
  };

  const interviews = [
    {
      title: "Technical test Interview",
      mode: "Online Mode",
      date: "2 Jan 2025",
      time: "12:00 PM to 1:00 PM",
      meetLink: "https://www.zoom.com/meetingchdjjso",
      scheduledBy: "Darshal Sharma (2 Jan 2025)",
      assignedManager: ["/avatars/avatar-1.jpg", "/avatars/avatar-2.jpg"],
      interviewPanel: ["/avatars/avatar-3.jpg", "/avatars/avatar-4.jpg"],
    },
    {
      title: "Technical test Interview",
      mode: "Online Mode",
      date: "2 Jan 2025",
      time: "12:00 PM to 1:00 PM",
      meetLink: "https://www.zoom.com/meetingchdjjso",
      scheduledBy: "Darshal Sharma (2 Jan 2025)",
      assignedManager: ["/avatars/avatar-1.jpg", "/avatars/avatar-2.jpg"],
      interviewPanel: ["/avatars/avatar-3.jpg", "/avatars/avatar-4.jpg"],
    },
    {
      title: "Technical test Interview",
      mode: "Online Mode",
      date: "2 Jan 2025",
      time: "12:00 PM to 1:00 PM",
      meetLink: "https://www.zoom.com/meetingchdjjso",
      scheduledBy: "Darshal Sharma (2 Jan 2025)",
      assignedManager: ["/avatars/avatar-1.jpg", "/avatars/avatar-2.jpg"],
      interviewPanel: ["/avatars/avatar-3.jpg", "/avatars/avatar-4.jpg"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto flex gap-[30px]">
            {/* Candidate Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-2/5">
              <div className="flex flex-row md:flex-col">
                {/* Left side - Profile info */}
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={userImage}
                        alt="Sumit Desai"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">
                        {candidateData.name}
                      </h1>
                      <div className="flex items-center mt-2 space-x-4">
                        <div className="flex items-center text-gray-600">
                          <Phone size={16} className="mr-1" />
                          <span>{candidateData.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          <span>{candidateData.location}</span>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <button className="p-2 text-blue-500 border border-blue-500 rounded-md">
                          <Mail size={18} />
                        </button>
                        <button className="p-2 text-blue-500 border border-blue-500 rounded-md">
                          <FileText size={18} />
                        </button>
                        <button className="p-2 text-blue-500 border border-blue-500 rounded-md">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Profile completion</span>
                      <div className="flex items-center">
                        <span className="text-sm text-blue-500 mr-2">
                          {candidateData.profileCompletion}%
                        </span>
                        <button className="text-blue-500">
                          <Edit size={16} />
                          <span className="ml-1">Edit</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${candidateData.profileCompletion}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <div className="flex items-start">
                        {candidateData.matched.icon}
                        <div className="ml-2">
                          <p className="text-sm text-gray-600">
                            What thing matched
                          </p>
                          <p className="font-medium">
                            {candidateData.matched.items.join(" , ")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <div className="flex items-start">
                        {candidateData.against.icon}
                        <div className="ml-2">
                          <p className="text-sm text-gray-600">
                            What went Against
                          </p>
                          <p className="font-medium">
                            {candidateData.against.items.join(" , ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-b border-gray-200 py-3 flex justify-between">
                      <span className="font-medium text-gray-700">Skills</span>
                      <span className="text-gray-600">
                        {candidateData.skills}
                      </span>
                    </div>
                    <div className="border-b border-gray-200 py-3 flex justify-between">
                      <span className="font-medium text-gray-700">
                        Education
                      </span>
                      <div className="flex items-center text-gray-600">
                        <span>{candidateData.education}</span>
                        <ChevronDown size={16} className="ml-2" />
                      </div>
                    </div>
                    <div className="border-b border-gray-200 py-3 flex justify-between">
                      <span className="font-medium text-gray-700">
                        Experience
                      </span>
                      <div className="flex items-center text-gray-600">
                        <span>{candidateData.experience}</span>
                        <ChevronDown size={16} className="ml-2" />
                      </div>
                    </div>
                    <div className="border-b border-gray-200 py-3 flex justify-between">
                      <span className="font-medium text-gray-700">
                        Salary (P.A.)
                      </span>
                      <span className="text-gray-600">
                        {candidateData.salary}
                      </span>
                    </div>
                    <div className="border-b border-gray-200 py-3 flex justify-between">
                      <span className="font-medium text-gray-700">
                        Notice Period
                      </span>
                      <span className="text-gray-600">
                        {candidateData.noticePeriod}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side - ATS Score */}
                <div className="md:w-64 mt-6 md:mt-0 md:ml-6 flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="10"
                        strokeDasharray={`${
                          (2 * Math.PI * 45 * candidateData.atsScore) / 100
                        } ${
                          (2 * Math.PI * 45 * (100 - candidateData.atsScore)) /
                          100
                        }`}
                        strokeDashoffset={(2 * Math.PI * 45 * 25) / 100}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-500">
                        {candidateData.atsScore}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-center font-medium">ATS Score</p>

                  <div className="mt-8 w-full">
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Documents</span>
                        <span className="text-sm text-gray-500">
                          Click to download
                        </span>
                      </div>
                      <div className="space-y-3">
                        {candidateData.documents.map((doc, index) => (
                          <button
                            key={index}
                            className="w-full py-2 px-4 border rounded-md text-center hover:bg-gray-50"
                          >
                            {doc.name}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center mt-4 justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-sm">Verified</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <span className="text-sm">Unverified</span>
                          </div>
                        </div>
                        <button className="text-blue-500 text-sm flex items-center">
                          <Download size={14} className="mr-1" />
                          Download All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interviews Section */}
            <div className="space-y-6 w-3/5">
              {interviews.map((interview, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-medium">Interviews</h2>
                    <span className="text-gray-600">
                      {interview.scheduledBy}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-medium">
                          {interview.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                            {interview.mode}
                          </span>
                          <span className="ml-4 text-gray-600 text-sm">
                            {interview.date}, {interview.time}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="text-sm text-gray-500">
                            Meet Link -{" "}
                          </span>
                          <a
                            href={interview.meetLink}
                            className="text-sm text-blue-500"
                          >
                            {interview.meetLink}
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p className="text-gray-600 mb-2">Assigned Manger</p>
                          <div className="flex -space-x-2">
                            {interview.assignedManager.map((avatar, i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80"
                                  alt="Avatar"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-2">Interiew Panel</p>
                          <div className="flex -space-x-2">
                            {interview.interviewPanel.map((avatar, i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80"
                                  alt="Avatar"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 space-x-4">
                      <button className="text-blue-500 font-medium">
                        Edit Managers
                      </button>
                      <button className="text-blue-500 font-medium flex items-center">
                        <Plus size={16} className="mr-1" />
                        Add New
                      </button>
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

export default CandidateProfile;
