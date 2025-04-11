import React from "react";
import bottomImage from "../assets/bottom-chart.jpg";
const style = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

const IssueCountCard = () => {
  return (
    <div
      style={style}
      className="bg-[#fff] text-[#212529] font-[500] rounded-[10px] mb-[2rem]"
    >
      <h6 className="mb-[1rem] text-[16px] uppercase p-[1rem] pb-0">
        Appointments
      </h6>
      <p className="font-bold text-[30px] leading-[1.2rem] mb-[15px] p-[1rem] pb-0">
        2354
      </p>
      <img className="w-[100%]" src={bottomImage} alt="" />
    </div>
  );
};

export default IssueCountCard;
