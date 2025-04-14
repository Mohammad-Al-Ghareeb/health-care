import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAddLocation } from "react-icons/md";
import doctorCharacter from "../assets/doctor.jpg";
import { baseUrl } from "../utils/request";
const shadow = {
  boxShadow: "0 1px 6px 1px rgb(69 65 78 / 10%)",
};

const DoctorCard = ({ doctor }) => {
  return (
    <div
      className="w-[100%] bg-[#fff] text-[#000] p-[1rem] text-[14px] flex items-center"
      style={shadow}
    >
      <div className="w-[20%] ">
        <img
          className="bg-cover w-[100%] "
          src={doctor.image ? baseUrl + doctor.image : doctorCharacter}
          alt=""
        />
      </div>

      <div className="flex justify-between w-[80%]">
        <div className="ml-[10px]">
          <p>{doctor.username}</p>
          <p className="text-[#878793] mt-[0.25rem] mb-[0.25rem]">
            {doctor.role}
          </p>
          {doctor.address && (
            <p className="flex items-center ">
              <MdAddLocation className="mr-[2px] font-[900]" size={14} />{" "}
              {doctor.address}
            </p>
          )}
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
