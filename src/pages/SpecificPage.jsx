import { Link } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import StatusComponent from "../components/StatusComponent";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import { getAllSpecifics } from "../redux/apiCalls/SpecificApiCall";
import { useDispatch, useSelector } from "react-redux";

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
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const { specifics, documentCount } = useSelector((state) => state.specific);

  useEffect(() => {
    dispatch(
      getAllSpecifics({
        page: currentPage,
        perPage: itemsPerPage,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, itemsPerPage, searchTerm]);

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1
  };

  // Focus style for search input
  const focusStyle = isFocused
    ? {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 .2rem rgba(0, 123, 255, .25)",
      }
    : {};

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
            <select
              className="border rounded ml-2 outline-0"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search Data..."
            className="rounded-[25px] outline-0 border border-[#0000001a] pl-[11px] pr-[11px]"
            value={searchTerm}
            style={{ ...style, ...focusStyle }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 on search
            }}
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
              {specifics?.map((specific, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 == 0 ? "bg-[#f2f2f2]" : "bg-[#fff] text-[#212529]"
                  }
                >
                  <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                    {specific.name}
                  </td>
                  <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                    <StatusComponent
                      title={specific.isAvailable ? "Active" : "Not Active"}
                      isActive={specific.isAvailable}
                    />
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
              Page {currentPage} of {Math.ceil(documentCount / itemsPerPage)}
            </span>
          </div>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(documentCount / itemsPerPage)}
              page={currentPage}
              variant="outlined"
              shape="rounded"
              onChange={(_, page) => setCurrentPage(page)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default SpecificsPage;
