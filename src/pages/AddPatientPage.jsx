// import { Link } from "react-router-dom";
// import InputComponent from "../components/InputComponent";
// import SelectComponent from "../components/SelectComponent";
// import CustomButton from "../components/CustomButton";
// import GroupSelect from "../components/GroupSelect";
// import ImageUpload from "../components/ImageUpload";

// const shadow = {
//   boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
// };
// const gender = [{ name: "male" }, { name: "female" }];
// const bloods = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// const AddPatientPage = () => {
//   const handleReset = () => {
//     console.log("Reset clicked");
//   };

//   const handleSubmit = () => {
//     console.log("Submit clicked");
//   };

//   return (
//     <div style={shadow} className="bg-[#fff]">
//       <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
//         <h6 className="font-[700] text-[#000000]">ADD PATIENTS</h6>
//         <Link to={"/patients/list"} className="text-[14px] text-[#009efb]">
//           Patients list
//         </Link>
//       </div>

//       <div className="p-[24px] grid grid-cols-2 gap-[15px] ">
//         <InputComponent
//           label={"Username"}
//           placeholder={"Enter username"}
//           name={"username"}
//           margin={true}
//         />

//         <InputComponent
//           label={"Email Address"}
//           placeholder={"Enter Email"}
//           name={"email"}
//           type={"email"}
//           margin={true}
//         />

//         <InputComponent
//           label={"Phone Number"}
//           placeholder={"Enter Phone Number"}
//           name={"phoneNumber"}
//           margin={true}
//         />

//         <InputComponent
//           label={"Password"}
//           placeholder={"Enter Password"}
//           name={"password"}
//           margin={true}
//         />

//         <InputComponent
//           label={"Date Of Birth"}
//           placeholder={"Enter Date Of Birth"}
//           name={"birthday"}
//           margin={true}
//         />

//         <ImageUpload name={"Patient"} />

//         <InputComponent
//           label={"Address"}
//           placeholder={"Enter Address"}
//           name={"address"}
//           type={"text"}
//         />

//         <GroupSelect label={"Blood"} selectedGroups={bloods} />

//         <InputComponent
//           label={"money"}
//           placeholder={"Enter Money"}
//           name={"money"}
//           type={"number"}
//         />

//         <InputComponent
//           label={"Heart Rate"}
//           placeholder={"Enter heart rate"}
//           name={"heartRate"}
//           type={"number"}
//         />

//         <InputComponent
//           label={"Calories"}
//           placeholder={"Enter calories"}
//           name={"calories"}
//           type={"number"}
//         />

//         <InputComponent
//           label={"Weight"}
//           placeholder={"Enter weight"}
//           name={"weight"}
//           type={"number"}
//         />

//         <SelectComponent selectArray={gender} title={"Gender"} />
//       </div>

//       <div className="p-[24px] pt-0"></div>

//       <div className="p-[24px]">
//         <CustomButton
//           bgColor="bg-[#fda600]"
//           onClick={handleReset}
//           className={"text-[#fff]"}
//         >
//           Reset
//         </CustomButton>
//         <CustomButton
//           bgColor="bg-[#009efb]"
//           onClick={handleSubmit}
//           className={"text-[#fff]"}
//         >
//           Submit
//         </CustomButton>
//       </div>
//     </div>
//   );
// };

// export default AddPatientPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import CustomButton from "../components/CustomButton";
import GroupSelect from "../components/GroupSelect";
import ImageUpload from "../components/ImageUpload";
import { useDispatch } from "react-redux";
import { addPatient } from "../redux/apiCalls/PatientApiCall";

const shadow = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};
const gender = [{ name: "male" }, { name: "female" }];
const bloods = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const AddPatientPage = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    birthday: "",
    address: "",
    disease: "",
    blood: "",
    gender: "",
    money: "",
    heartRate: "",
    calories: "",
    weight: "",
    image: null,
    role: "patient",
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
  //     username: "",
  //     email: "",
  //     phoneNumber: "",
  //     password: "",
  //     birthday: "",
  //     address: "",
  //     disease: "",
  //     blood: "",
  //     gender: "",
  //     money: "",
  //     heartRate: "",
  //     calories: "",
  //     weight: "",
  //     image: null,
  //     role: "patient",
  //   });
  // };

  // Handle form submit
  const handleSubmit = async () => {
    // Create a FormData object to send data as form data
    const form = new FormData();

    // Append fields to the FormData
    for (const [key, value] of Object.entries(formData)) {
      if (key === "image" && value) {
        form.append("image", value); // Append image file
        console.log(key, value);
      } else {
        form.append(key, value); // Append other form values
        console.log(key, value);
      }
    }

    // Dispatch the addPatient action with the form data
    dispatch(addPatient(formData, navigate));
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD PATIENTS</h6>
        <Link to={"/patients/list"} className="text-[14px] text-[#009efb]">
          Patients list
        </Link>
      </div>

      <div className="p-[24px] grid grid-cols-2 gap-[15px]">
        <InputComponent
          label={"Username"}
          placeholder={"Enter username"}
          name={"username"}
          value={formData.username}
          onChange={handleChange}
          margin={true}
        />

        <InputComponent
          label={"Email Address"}
          placeholder={"Enter Email"}
          name={"email"}
          type={"email"}
          value={formData.email}
          onChange={handleChange}
          margin={true}
        />

        <InputComponent
          label={"Phone Number"}
          placeholder={"Enter Phone Number"}
          name={"phoneNumber"}
          value={formData.phoneNumber}
          onChange={handleChange}
          margin={true}
        />

        <InputComponent
          label={"Password"}
          placeholder={"Enter Password"}
          name={"password"}
          type={"password"}
          value={formData.password}
          onChange={handleChange}
          margin={true}
        />
        <InputComponent
          label={"Disease"}
          placeholder={"Enter disease"}
          name={"disease"}
          type={"text"}
          value={formData.disease}
          onChange={handleChange}
          margin={true}
        />

        <InputComponent
          label={"Date Of Birth"}
          placeholder={"Enter Date Of Birth"}
          name={"birthday"}
          value={formData.birthday}
          onChange={handleChange}
          margin={true}
        />

        <ImageUpload name={"Patient"} onChange={handleImageChange} />

        <InputComponent
          label={"Address"}
          placeholder={"Enter Address"}
          name={"address"}
          type={"text"}
          value={formData.address}
          onChange={handleChange}
        />

        <GroupSelect
          label={"Blood"}
          selectedGroups={bloods}
          name={"blood"}
          value={formData.blood}
          onChange={handleChange}
        />

        <InputComponent
          label={"Money"}
          placeholder={"Enter Money"}
          name={"money"}
          type={"number"}
          value={formData.money}
          onChange={handleChange}
        />

        <InputComponent
          label={"Heart Rate"}
          placeholder={"Enter heart rate"}
          name={"heartRate"}
          type={"number"}
          value={formData.heartRate}
          onChange={handleChange}
        />

        <InputComponent
          label={"Calories"}
          placeholder={"Enter calories"}
          name={"calories"}
          type={"number"}
          value={formData.calories}
          onChange={handleChange}
        />

        <InputComponent
          label={"Weight"}
          placeholder={"Enter weight"}
          name={"weight"}
          type={"number"}
          value={formData.weight}
          onChange={handleChange}
        />

        <SelectComponent
          selectArray={gender}
          title={"Gender"}
          name={"gender"}
          value={formData.gender}
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

export default AddPatientPage;
