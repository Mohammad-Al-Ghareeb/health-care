import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import ImageUpload from "../components/ImageUpload";
import { useDispatch } from "react-redux";
import { addAmbulance } from "../redux/apiCalls/AmbulanceApiCall"; // Adjust import based on your API calls

const shadow = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};

const AddAmbulancePage = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    phoneNumber: "",
    price: "",
    image: null,
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

  // Handle file change for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // Handle form reset
  // const handleReset = () => {
  //   setFormData({
  //     phoneNumber: "",
  //     price: "",
  //     image: null,
  //   });
  // };

  // Handle form submit
  const handleSubmit = () => {
    // Basic validation
    if (!formData.phoneNumber || !formData.price) {
      alert("Please fill all required fields");
      return;
    }

    // Create FormData for file upload
    const form = new FormData();
    form.append("phoneNumber", formData.phoneNumber);
    form.append("price", formData.price);
    if (formData.image) {
      form.append("image", formData.image);
    }

    // Dispatch the addAmbulance action
    dispatch(addAmbulance(form, navigate));
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD AMBULANCE</h6>
        <Link to={"/ambulances/list"} className="text-[14px] text-[#009efb]">
          Ambulances list
        </Link>
      </div>

      <div className="p-[24px] grid grid-cols-2 gap-[15px]">
        <InputComponent
          label={"Phone Number"}
          placeholder={"Enter phone number"}
          name={"phoneNumber"}
          value={formData.phoneNumber}
          onChange={handleChange}
          margin={true}
        />

        <InputComponent
          label={"Price"}
          placeholder={"Enter price"}
          name={"price"}
          value={formData.price}
          onChange={handleChange}
          margin={true}
          type={"number"}
        />

        <ImageUpload name={"Ambulance"} onChange={handleImageChange} />
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

export default AddAmbulancePage;
