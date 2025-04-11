import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import AddPrescriptionComponent from "./addPrescriptionComponent";
import AddReportComponent from "./AddReportComponent";
import HeaderNotifications from "./HeaderNotifications";

const Header = () => {
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);

  const addPrescriptionClick = () => {
    setIsPrescriptionOpen(!isPrescriptionOpen);
  };
  return (
    <>
      <AddPrescriptionComponent
        isPrescriptionOpen={isPrescriptionOpen}
        setIsPrescriptionOpen={setIsPrescriptionOpen}
      />

      <AddReportComponent
        isReportOpen={isReportOpen}
        setIsReportOpen={setIsReportOpen}
      />

      <div className="pl-[30px] pr-[30px] flex justify-between items-center w-[100%] pt-[1rem] pb-[1rem] bg-[#009efb] shadow-left">
        <div className="text-[1.25rem] text-[#fff] cursor-pointer">
          <RiMenu2Fill />
        </div>
        <ul className="flex items-center">
          <li className="pr-[15px]" onClick={addPrescriptionClick}>
            <div className="flex items-center text-[1.1rem] text-[#fff] cursor-pointer">
              <p className="mr-[6px]">
                <GoPencil />
              </p>
              <p>Make an prescription</p>
            </div>
          </li>

          <li className="pr-[15px]" onClick={setIsReportOpen}>
            <div className="flex items-center text-[1.1rem] text-[#fff] cursor-pointer">
              <p className="mr-[6px]">
                <HiOutlineDocumentReport />
              </p>
              <p>Generate Report</p>
            </div>
          </li>

          <li className="relative" onClick={setIsOpenNotifications}>
            <div className="text-[1.1rem] text-[#fff] cursor-pointer">
              <IoNotificationsOutline />
            </div>
            <HeaderNotifications
              isOpenNotifications={isOpenNotifications}
              setIsOpenNotifications={setIsOpenNotifications}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
