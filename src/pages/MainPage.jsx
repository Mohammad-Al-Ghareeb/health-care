import React from "react";
import ModelsCountCard from "../components/ModelsCountCard";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaUserNurseSolid } from "react-icons/lia";
import { MdOutlineSick } from "react-icons/md";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import IssueCountCard from "../components/IssueCountCard";
import MainCalendar from "../components/MainCalender";
const style = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

const style1 = {
  backgroundColor: "#ffffff",
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 158, 251, 0.80), #ffffff)",
};

const MainPage = () => {
  const data = [
    { text: "DOCTOR", count: 5, icon: <FaUserDoctor color="#fff" size={45} /> },
    {
      text: "NURSE",
      count: 10,
      icon: <LiaUserNurseSolid color="#fff" size={45} />,
    },
    {
      text: "PATIENT",
      count: 20,
      icon: <MdOutlineSick color="#fff" size={45} />,
    },
    {
      text: "PHARMACY",
      count: 15,
      icon: <MdOutlineLocalPharmacy color="#fff" size={45} />,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center mb-[32px] text-[#fff]">
        {data.map((item, id) => {
          return <ModelsCountCard item={item} key={id} />;
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          {[1, 2, 3].map((e, id) => {
            return <IssueCountCard key={id} />;
          })}
        </div>
        <div style={style} className="bg-white rounded-lg p-4">
          <MainCalendar />
        </div>
        <div className="bg-white rounded-lg p-4 shadow flex items-center justify-center flex-col relative">
          <h5 className="mt-[1rem] text-[22px] font-[500] text-[#000] mb-[0.5rem]">
            Health Care
          </h5>
          <p className="text-[#4e4e4e] mb-[1rem]">Project</p>
          <p className="text-center text-[#878793] text-[14px] mb-[1rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod non
            quibusdam porro atque. Exercitationem,
          </p>
          <div className="border border-t-[#0000001a] border-r-0 border-b-0 border-l-0 w-[100%] flex items-center justify-between pt-[1rem] mt-[1.5rem]">
            <div className="w-[50%] flex flex-col justify-center items-center border border-r-[#0000001a] border-t-0 border-b-0 border-l-0">
              <p className="text-[24px] font-[700] text-[#000000]">5890</p>
              <p className="mb-[1rem] text-[#4e4e4e]">Operations</p>
            </div>
            <div className="w-[50%] flex flex-col justify-center items-center">
              <p className="text-[24px] font-[700] text-[#000000]">250$</p>
              <p className="mb-[1rem] text-[#4e4e4e]">money</p>
            </div>
          </div>

          <div
            style={style1}
            className="w-[100%] absolute top-0 left-0 h-[50px]  rounded-t-lg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
