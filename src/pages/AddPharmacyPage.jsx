import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import ImageUpload from "../components/ImageUpload";

const shadow = {
  boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};

const AddPharmacyPage = () => {
  const handleReset = () => {
    console.log("Reset clicked");
  };

  const handleSubmit = () => {
    console.log("Submit clicked");
  };

  return (
    <>
      <div style={shadow} className="bg-[#fff]">
        <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
          <h6 className="font-[700] text-[#000000]">ADD PHARMACY</h6>
          <Link to={"/pharmacies/list"} className="text-[14px] text-[#009efb]">
            Pharmacies list
          </Link>
        </div>

        <div className="p-[24px] grid grid-cols-2 gap-[15px] ">
          <InputComponent
            label={"Pharmacy Name"}
            placeholder={"Enter pharmacy name"}
            name={"name"}
            margin={true}
          />
          <InputComponent
            label={"Phone Number"}
            placeholder={"Enter phone number"}
            name={"phoneNumber"}
            margin={true}
          />

          <InputComponent
            label={"Pharmacy Description"}
            placeholder={"Enter pharmacy description"}
            name={"description"}
            margin={true}
          />

          <InputComponent
            label={"Location"}
            placeholder={"Enter pharmacy location"}
            name={"location"}
            margin={true}
          />

          <ImageUpload name={"Pharmacy"} />
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
    </>
  );
};

export default AddPharmacyPage;
