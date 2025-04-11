import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import ImageUpload from "../components/ImageUpload";
import SelectComponent from "../components/SelectComponent";
import GroupSelect from "../components/GroupSelect";

const shadow = {
  boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};

const AddProductPage = () => {
  const handleReset = () => {
    console.log("Reset clicked");
  };

  const handleSubmit = () => {
    console.log("Submit clicked");
  };

  const bloods = ["foorkan", "azamia", "sakhra"];

  return (
    <>
      <div style={shadow} className="bg-[#fff]">
        <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
          <h6 className="font-[700] text-[#000000]">ADD PRODUCT</h6>
          <Link to={"/products/list"} className="text-[14px] text-[#009efb]">
            Products list
          </Link>
        </div>

        <div className="p-[24px] grid grid-cols-2 gap-[15px] ">
          <InputComponent
            label={"Product Name"}
            placeholder={"Enter product name"}
            name={"name"}
            margin={true}
          />

          <GroupSelect label={"Pharmacy"} selectedGroups={bloods} />

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
            label={"Old Price"}
            placeholder={"Enter old price"}
            name={"oldPrice"}
            type={"number"}
            margin={true}
          />

          <InputComponent
            label={"Price"}
            placeholder={"Enter price"}
            name={"price"}
            type={"number"}
            margin={true}
          />

          <InputComponent
            label={"Description"}
            placeholder={"Enter description"}
            name={"description"}
            margin={true}
          />

          <InputComponent
            label={"Capacity"}
            placeholder={"Enter capacity"}
            name={"capacity"}
            margin={true}
          />

          <ImageUpload name={"Product"} />
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

export default AddProductPage;
