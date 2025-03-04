import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200 mt-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              We deliver solutions that work for all company needs. We are
              driven by passion and expertise to provide innovative solutions
              for businesses of all sizes. Our team is dedicated to helping our
              clients succeed.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Website Design & Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  UI/UX Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Software Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
              CONTACTS
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                Address (India): Sector 5, Noida (as a hiring partner)
              </li>
              <li className="text-sm text-gray-600">
                Address (Canada): 8 Wellesley street east, Toronto
              </li>
              <li className="text-sm text-gray-600">
                Email: info@techhire.com
              </li>
              <li className="text-sm text-gray-600">
                Phone: +1 (123) 456-7890
              </li>
              <li className="flex space-x-2 mt-4">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-blue-400 text-white p-2 rounded-full">
                  <Twitter size={16} />
                </a>
                <a href="#" className="bg-blue-700 text-white p-2 rounded-full">
                  <Linkedin size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
