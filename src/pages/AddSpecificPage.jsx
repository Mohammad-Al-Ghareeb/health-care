import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import CustomButton from "../components/CustomButton";
import CircleChart from "../components/PieChart.jsx";

const shadow = {
  boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};
const status = [{ name: "Active" }, { name: "Inactive" }];

const AddSpecificPage = () => {
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
          <h6 className="font-[700] text-[#000000]">ADD SPECIFICS</h6>
          <Link to={"/specifics/list"} className="text-[14px] text-[#009efb]">
            Specifics list
          </Link>
        </div>

        <div className="p-[24px] grid grid-cols-2 gap-[15px] ">
          <InputComponent
            label={"Name"}
            placeholder={"Enter specific name"}
            name={"name"}
            margin={true}
          />

          <SelectComponent selectArray={status} title={"Status"} />
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

export default AddSpecificPage;
