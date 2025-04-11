import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const style = {
  transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
  padding: ".375rem .75rem",
};

const AmbulancesPage = () => {
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

  const ambulances = [
    {
      image: "Angelica",
      name: "alForkan",
      description: "this is about the pharmacy",
      phoneNumber: "0954052578",
      location: "forkan",
    },
    {
      image: "Angelica",
      name: "alForkan",
      description: "this is about the pharmacy",
      phoneNumber: "0954052578",
      location: "forkan",
    },
    {
      image: "Angelica",
      name: "alForkan",
      description: "this is about the pharmacy",
      phoneNumber: "0954052578",
      location: "forkan",
    },
    {
      image: "Angelica",
      name: "alForkan",
      description: "this is about the pharmacy",
      phoneNumber: "0954052578",
      location: "forkan",
    },
  ];

  const filteredOrders = ambulances;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className=" bg-white rounded-lg shadow">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">AMBULANCES LIST</h6>
        <Link
          to={"/ambulances/add-ambulance"}
          className="text-[14px] text-[#009efb]"
        >
          Add Ambulance
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
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#009efb] text-white">
              <th className="p-[0.75rem] text-start">Image</th>
              <th className="p-[0.75rem] text-start">Name</th>
              <th className="p-[0.75rem] text-start">description</th>
              <th className="p-[0.75rem] text-start">Phone Number</th>
              <th className="p-[0.75rem] text-start">location</th>
              <th className="p-[0.75rem] text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders?.map((order, index) => (
              <tr
                key={index}
                className={
                  index % 2 == 0 ? "bg-[#f2f2f2]" : "bg-[#fff] text-[#212529]"
                }
              >
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]">
                  <img src={order.img} alt="" />
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]">
                  {order.name}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]">
                  {order.description}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]">
                  {order.phoneNumber}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]">
                  {order.location}
                </td>

                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]">
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
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
          />
        </Stack>
      </div>
    </div>
  );
};

export default AmbulancesPage;
