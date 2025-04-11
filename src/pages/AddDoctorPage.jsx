import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import CustomButton from "../components/CustomButton";
import GroupSelect from "../components/GroupSelect";
import ImageUpload from "../components/ImageUpload";

const shadow = {
  boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};
const gender = [{ name: "male" }, { name: "female" }];
const bloods = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const AddDoctorPage = () => {
  const handleReset = () => {
    console.log("Reset clicked");
  };

  const handleSubmit = () => {
    console.log("Submit clicked");
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD DOCTORS</h6>
        <Link to={"/doctors/list"} className="text-[14px] text-[#009efb]">
          Doctors list
        </Link>
      </div>

      <div className="p-[24px] grid grid-cols-2 gap-[15px] ">
        <InputComponent
          label={"Username"}
          placeholder={"Enter username"}
          name={"username"}
          margin={true}
        />

        <InputComponent
          label={"Email Address"}
          placeholder={"Enter Email"}
          name={"email"}
          type={"email"}
          margin={true}
        />

        <InputComponent
          label={"Phone Number"}
          placeholder={"Enter Phone Number"}
          name={"phoneNumber"}
          margin={true}
        />

        <InputComponent
          label={"Password"}
          placeholder={"Enter Password"}
          name={"password"}
          margin={true}
        />

        <GroupSelect label={"Specifics"} selectedGroups={bloods} />

        <InputComponent
          label={"Date Of Birth"}
          placeholder={"Enter Date Of Birth"}
          name={"birthday"}
          margin={true}
        />

        <InputComponent
          label={"Price Per Hour"}
          placeholder={"Enter Price Per Hour"}
          name={"pricePerHour"}
          type={"number"}
          margin={true}
        />

        <ImageUpload name={"Doctor"} />

        <InputComponent
          label={"Address"}
          placeholder={"Enter Address"}
          name={"address"}
          type={"text"}
        />

        <InputComponent
          label={"Blood Group"}
          placeholder={"Enter Blood Group"}
          name={"blood"}
          type={"text"}
        />

        <GroupSelect label={"Blood"} selectedGroups={bloods} />

        <SelectComponent selectArray={gender} title={"Gender"} />
      </div>

      <div className="p-[24px] pt-0"></div>

      <div className="p-[24px]">
        <CustomButton
          bgColor="bg-[#fda600]"
          onClick={handleReset}
          className={"text-[#fff]"}
        >
          Reset
        </CustomButton>
        <CustomButton
          bgColor="bg-[#009efb]"
          onClick={handleSubmit}
          className={"text-[#fff]"}
        >
          Submit
        </CustomButton>
      </div>
    </div>
  );
};

export default AddDoctorPage;
