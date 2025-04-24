
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import CustomButton from "../components/CustomButton";
import CircleChart from "../components/PieChart.jsx";
import { useDispatch } from "react-redux";
import { addSpecific } from "../redux/apiCalls/SpecificApiCall"; // Adjust this import based on your API calls

const shadow = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};
const status = [{ name: "Active" }, { name: "Inactive" }];

const AddSpecificPage = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    isAvailable: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form reset
  // const handleReset = () => {
  //   setFormData({
  //     name: "",
  //     isAvailable: false,
  //   });
  // };

  // Handle form submit
  const handleSubmit = () => {
    // Validate form data if needed
    if (!formData.name || !formData.isAvailable) {
      alert("Please fill all fields");
      return;
    }
    console.log(formData);
    if (formData["isAvailable"] === "Active") formData["isAvailable"] = true;
    else formData["isAvailable"] = false;
    // Dispatch the addSpecific action with the form data
    dispatch(addSpecific(formData, navigate));
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD SPECIFICS</h6>
        <Link to={"/specifics/list"} className="text-[14px] text-[#009efb]">
          Specifics list
        </Link>
      </div>

      <div className="p-[24px] grid grid-cols-2 gap-[15px]">
        <InputComponent
          label={"Name"}
          placeholder={"Enter specific name"}
          name={"name"}
          value={formData.name}
          onChange={handleChange}
          margin={true}
        />

        <SelectComponent
          selectArray={status}
          title={"Status"}
          name={"isAvailable"}
          value={formData.isAvailable}
          onChange={handleChange}
        />
      </div>

      <div className="p-[24px] pt-0"></div>

      <div className="p-[24px]">
        {/* <CustomButton
          bgColor="bg-[#fda600]"
          onClick={handleReset}
          className={"text-[#fff]"}
        >
          Reset
        </CustomButton> */}
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

export default AddSpecificPage;
