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

const ProductsPage = () => {
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
      image: "",
      name: "Angelica",
      pharmacyName: "Linden Avenue",
      oldPrice: 45,
      price: 24,
      description: "description description description",
      capacity: "2ml",
    },
    {
      image: "",
      name: "Angelica",
      pharmacyName: "Linden Avenue",
      oldPrice: 45,
      price: 24,
      description: "description description description",
      capacity: "2ml",
    },
    {
      image: "",
      name: "Angelica",
      pharmacyName: "Linden Avenue",
      oldPrice: 45,
      price: 24,
      description: "description description description",
      capacity: "2ml",
    },
    {
      image: "",
      name: "Angelica",
      pharmacyName: "Linden Avenue",
      oldPrice: 45,
      price: 24,
      description: "description description description",
      capacity: "2ml",
    },
    {
      image: "",
      name: "Angelica",
      pharmacyName: "Linden Avenue",
      oldPrice: 45,
      price: 24,
      description: "description description description",
      capacity: "2ml",
    },
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
    <div className=" bg-white rounded-lg shadow">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">PRODUCTS LIST</h6>
        <Link
          to={"/products/add-product"}
          className="text-[14px] text-[#009efb]"
        >
          Add Product
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
              <th className="p-[0.75rem] text-start ">Image</th>
              <th className="p-[0.75rem] text-start ">Name</th>
              <th className="p-[0.75rem] text-start">Pharmacy Name</th>
              <th className="p-[0.75rem] text-start">Old Price</th>
              <th className="p-[0.75rem] text-start">Price</th>
              <th className="p-[0.75rem] text-start">description</th>
              <th className="p-[0.75rem] text-start">capacity</th>
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
                  {patient.image}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.name}
                </td>
                <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.pharmacyName}
                </td>
                <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.oldPrice}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.price}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.description}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.capacity}
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
  );
};

export default ProductsPage;
