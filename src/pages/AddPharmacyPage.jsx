import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import ImageUpload from "../components/ImageUpload";
import { useDispatch } from "react-redux";
import { addPharmacy } from "../redux/apiCalls/PharmacyApiCall"; // Adjust import based on your API calls

const shadow = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};

const AddPharmacyPage = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    description: "",
    location: "",
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
  //     name: "",
  //     phoneNumber: "",
  //     description: "",
  //     location: "",
  //     image: null,
  //   });
  // };

  // Handle form submit
  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.phoneNumber || !formData.location) {
      alert("Please fill all required fields");
      return;
    }

    // Create FormData for file upload
    const form = new FormData();
    form.append("name", formData.name);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("description", formData.description);
    form.append("location", formData.location);
    if (formData.image) {
      form.append("image", formData.image);
    }

    // Dispatch the addPharmacy action
    dispatch(addPharmacy(form, navigate));
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD PHARMACY</h6>
        <Link to={"/pharmacies/list"} className="text-[14px] text-[#009efb]">
          Pharmacies list
        </Link>
      </div>

      <div className="p-[24px] grid grid-cols-2 gap-[15px]">
        <InputComponent
          label={"Pharmacy Name"}
          placeholder={"Enter pharmacy name"}
          name={"name"}
          value={formData.name}
          onChange={handleChange}
          margin={true}
          required
        />

        <InputComponent
          label={"Phone Number"}
          placeholder={"Enter phone number"}
          name={"phoneNumber"}
          value={formData.phoneNumber}
          onChange={handleChange}
          margin={true}
          required
        />

        <InputComponent
          label={"Pharmacy Description"}
          placeholder={"Enter pharmacy description"}
          name={"description"}
          value={formData.description}
          onChange={handleChange}
          margin={true}
        />

        <InputComponent
          label={"Location"}
          placeholder={"Enter pharmacy location"}
          name={"location"}
          value={formData.location}
          onChange={handleChange}
          margin={true}
          required
        />

        <ImageUpload name={"Pharmacy"} onChange={handleImageChange} />
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

export default AddPharmacyPage;
