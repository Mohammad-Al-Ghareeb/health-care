import { Link } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import StatusComponent from "../components/StatusComponent";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const style = {
  transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
  padding: ".375rem .75rem",
};

const shadow = {
  boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};

const SpecificsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isFocused, setIsFocused] = useState(false);

  const focusStyle = isFocused
    ? {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 .2rem rgba(0, 123, 255, .25)",
      }
    : {};

  const patients = [
    {
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: 24,
      phone: "123-456-7890",
      email: "angelica@example.com",
    },
    {
      name: "Bradley",
      address: "Victory Garden, Tallahassee",
      disease: "Infection",
      age: 29,
      phone: "234-567-8901",
      email: "bradley@example.com",
    },
    {
      name: "Brewden",
      address: "New Haven, Columbia",
      disease: "Infection",
      age: 32,
      phone: "345-678-9012",
      email: "brewden@example.com",
    },
    {
      name: "Del Ros",
      address: "Victory Garden, Vero Beach",
      disease: "Liver Disease",
      age: 45,
      phone: "456-789-0123",
      email: "delros@example.com",
    },
    {
      name: "Fiona",
      address: "LA, West Palm Beach",
      disease: "Heart Disease",
      age: 28,
      phone: "567-890-1234",
      email: "fiona@example.com",
    },
    {
      name: "Gavin",
      address: "LA, LA, Vero Beach",
      disease: "Diabetes",
      age: 36,
      phone: "678-901-2345",
      email: "gavin@example.com",
    },
    {
      name: "Goria",
      address: "Victory Garden, Orlando",
      disease: "Liver Disease",
      age: 29,
      phone: "789-012-3456",
      email: "goria@example.com",
    },
    {
      name: "Janetta",
      address: "Birch Street, El Paso",
      disease: "Autoimmune",
      age: 34,
      phone: "890-123-4567",
      email: "janetta@example.com",
    },
    // Add more patient data as needed
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-2 gap-[30px] mb-[30px]">
        <div style={shadow} className="bg-[#fff]">
          <div className="p-[1.5rem] border border-l-0 border-r-0 border-t-0 border-[#0000001a]">
            <p className="text-[16px] text-[#000] font-[700]">
              TOTAL SPECIFICS
            </p>
          </div>
          <div className="p-[1.5rem]">
            <PieChart />
          </div>
        </div>
        <div>
          <div style={shadow} className="bg-[#fff]">
            <div className="p-[1.5rem] border border-l-0 border-r-0 border-t-0 border-[#0000001a]">
              <p className="text-[16px] text-[#000] font-[700]">
                TOTAL SPECIFICS
              </p>
            </div>
            <div className="p-[1.5rem] flex items-center justify-center">
              <BarChart />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-lg shadow">
        <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
          <h6 className="font-[700] text-[#000000]">SPECIFICS LIST</h6>
          <Link
            to={"/specifics/add-specific"}
            className="text-[14px] text-[#009efb]"
          >
            Add Specific
          </Link>
        </div>
        <div className="flex justify-between items-center mb-4 p-6 pb-0">
          <div>
            <span>Show </span>
            <select className="border rounded ml-2 outline-0">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          {/* padding: 11px 14px; */}
          <input
            type="text"
            placeholder="Search Data..."
            className=" rounded-[25px] outline-0 border border-[#0000001a] pl-[11px] pr-[11px]"
            value={searchTerm}
            style={{ ...style, ...focusStyle }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="px-[24px]">
          <table className="min-w-full border-collapse  ">
            <thead>
              <tr className="bg-[#009efb] text-white">
                <th className="p-[0.75rem] text-start ">Name</th>
                <th className="p-[0.75rem] text-start">Status</th>
                <th className="p-[0.75rem] text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients?.map((patient, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 == 0 ? "bg-[#f2f2f2]" : "bg-[#fff] text-[#212529]"
                  }
                >
                  <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                    {patient.name}
                  </td>
                  <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                    <StatusComponent title={patient.address} isActive={false} />
                  </td>

                  <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6] text-[#212529] ">
                    <button className="text-blue-500 cursor-pointer">
                      <FaPencil size={18} className="font-[400]" />
                    </button>
                    <button className="text-red-500 ml-2 cursor-pointer">
                      <RiDeleteBin6Line size={18} className="font-[400]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 p-[24px]">
          <div>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default SpecificsPage;
