import React, { useState } from "react";
import TechHireLogo from "./../assets/images/techhire_logo.svg";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", active: activeTab === "Home" },
    { name: "Jobs", active: activeTab === "Jobs" },
    { name: "Companies", active: activeTab === "Companies" },
    { name: "Contact Us", active: activeTab === "Contact Us" },
  ];

  return (
    <header className="bg-[#48596f] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={TechHireLogo}
            alt="Signup Illustration"
            className="w-full h-[60px]"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer py-2 px-1 ${
                  item.active ? "border-b-2 border-blue-400" : ""
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.name}
              </li>
            ))}
            <li className="cursor-pointer flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">CN</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
