import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { FaSitemap } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { getIdCookie } from "../utils/cookies";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
  };

  let user = getIdCookie();

  return (
    <div className="w-64 bg-[#009efb] text-white pt-6 h-[100%] relative shadow-right shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="text-center mb-8 flex flex-col items-center">
        <img src={logo} alt="Logo" className="mb-2 w-[150px]" />
        <h2 className="text-xl font-bold text-[20px]">{user?.username}</h2>
        <p className="text-[16px]">{user?.role}</p>
      </div>
      <ul className="space-y-4">
        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isDashboardOpen")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <LuLayoutDashboard className="mr-[20px]" size={16} />
                Dashboard
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isDashboardOpen" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isDashboardOpen"
                  ? "max-h-40 p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              <li>
                <NavLink
                  to="/dashboard"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Medjestic
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isOpenDoctor")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <FaStethoscope className="mr-[20px]" size={16} />
                Doctor
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isOpenDoctor" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isOpenDoctor"
                  ? "max-h-40 p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              <li>
                <NavLink
                  to="/doctors/add-doctor"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Doctor
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/doctors/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Doctor List
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isOpenPatient")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <FaUserDoctor className="mr-[20px]" size={16} />
                Patient
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isOpenPatient" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isOpenPatient"
                  ? "max-h-40 p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              <li>
                <NavLink
                  to="/patients/add-patient"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Patient
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/patients/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Patient List
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isOpenSpecific")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <FaSitemap className="mr-[20px]" size={16} />
                Specific
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isOpenPatient" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isOpenSpecific"
                  ? "max-h-40 p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              <li>
                <NavLink
                  to="/specifics/add-specific"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Specific
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/specifics/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Specifics List
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isOpenOrder")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <FaRegListAlt className="mr-[20px]" size={16} />
                Order
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isOpenOrder" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isOpenOrder"
                  ? "max-h-40 p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              {/* <li>
                <NavLink
                  to="/specifics/add-specific"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Specific
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/orders/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Orders List
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isOpenHuman")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <FaRegUserCircle className="mr-[20px]" size={16} />
                Human Resource
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isOpenHuman" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isOpenHuman"
                  ? "max-h-auto p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              <li>
                <NavLink
                  to="/ambulances/add-ambulance"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Ambulance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ambulances/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Ambulances List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pharmacies/add-pharmacy"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Pharmacy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pharmacies/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Pharmacies List
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products/add-product"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px] mb-[18px]"
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Products List
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <button
              onClick={() => toggleDropdown("isReportOpen")}
              className="flex justify-between items-center cursor-pointer w-full hover:text-yellow-300 pl-6 pr-6 transition-all duration-300 m-[15px]"
            >
              <div className="flex items-center justify-center">
                <FaFileAlt className="mr-[20px]" size={16} />
                Report&Prescription
              </div>
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === "isReportOpen" ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine size={20} />
              </span>
            </button>
            <ul
              className={`mt-[5px] space-y-2 bg-[#fff] transition-all duration-300 ease-in-out ${
                openDropdown === "isReportOpen"
                  ? "max-h-40 p-4"
                  : "max-h-0 overflow-hidden p-0"
              }`}
            >
              <li>
                <NavLink
                  to="/reports/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Reports List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/prescriptions/list"
                  className="hover:text-[#009efb] text-[#4e4e4e] pl-[40px]"
                >
                  Prescriptions List
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
