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

// const AddDoctorPage = () => {
//   const handleReset = () => {
//     console.log("Reset clicked");
//   };

//   const handleSubmit = () => {
//     console.log("Submit clicked");
//   };

//   return (
//     <div style={shadow} className="bg-[#fff]">
//       <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
//         <h6 className="font-[700] text-[#000000]">ADD DOCTORS</h6>
//         <Link to={"/doctors/list"} className="text-[14px] text-[#009efb]">
//           Doctors list
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

//         <GroupSelect label={"Specifics"} selectedGroups={bloods} />

//         <InputComponent
//           label={"Date Of Birth"}
//           placeholder={"Enter Date Of Birth"}
//           name={"birthday"}
//           margin={true}
//         />

//         <InputComponent
//           label={"Price Per Hour"}
//           placeholder={"Enter Price Per Hour"}
//           name={"pricePerHour"}
//           type={"number"}
//           margin={true}
//         />

//         <ImageUpload name={"Doctor"} />

//         <InputComponent
//           label={"Address"}
//           placeholder={"Enter Address"}
//           name={"address"}
//           type={"text"}
//         />

//         <InputComponent
//           label={"Blood Group"}
//           placeholder={"Enter Blood Group"}
//           name={"blood"}
//           type={"text"}
//         />

//         <GroupSelect label={"Blood"} selectedGroups={bloods} />

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

// export default AddDoctorPage;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import CustomButton from "../components/CustomButton";
import GroupSelect from "../components/GroupSelect";
import ImageUpload from "../components/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import { addDoctor } from "../redux/apiCalls/DoctorApiCall";
import { getAllSpecifics } from "../redux/apiCalls/SpecificApiCall";
import GroupPharmacySelect from "../components/GroupPharmacySelect";

// Constants
const shadow = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};
const gender = [{ name: "male" }, { name: "female" }];
const bloods = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const AddDoctorPage = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    birthday: "",
    pricePerHour: "",
    address: "",
    blood: "",
    gender: "",
    specific: "",
    role: "doctor",
    image: null,
  });

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
  //     pricePerHour: "",
  //     address: "",
  //     blood: "",
  //     gender: "",
  //     role: "doctor",
  //     image: null,
  //   });
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSpecifics({ page: 1, perPage: 100000 }));
  }, [dispatch]);

  const { specifics } = useSelector((state) => state.specific);
  console.log(specifics);

  const navigate = useNavigate();
  // Handle form submit
  const handleSubmit = async () => {
    // Create a FormData object to send data as form data
    const form = new FormData();

    // Append fields to the FormData
    for (const [key, value] of Object.entries(formData)) {
      if (key === "image" && value) {
        form.append("image", value); // Append image file
      } else {
        form.append(key, value); // Append other form values
      }
    }

    dispatch(addDoctor(formData, navigate));

    // console.log(...formData);
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD DOCTORS</h6>
        <Link to={"/doctors/list"} className="text-[14px] text-[#009efb]">
          Doctors list
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
        {/* <GroupSelect
          label={"Specifics"}
          selectedGroups={bloods}
          value={formData.blood}
          onChange={handleChange}
        /> */}
        <GroupPharmacySelect
          label={"Specifics"}
          selectedGroups={specifics}
          value={formData.specific}
          onChange={handleChange}
          name="specific"
        />

        <InputComponent
          label={"Date Of Birth"}
          placeholder={"Enter Date Of Birth"}
          name={"birthday"}
          value={formData.birthday}
          onChange={handleChange}
          margin={true}
        />
        <InputComponent
          label={"Price Per Hour"}
          placeholder={"Enter Price Per Hour"}
          name={"pricePerHour"}
          type={"number"}
          value={formData.pricePerHour}
          onChange={handleChange}
          margin={true}
        />
        <ImageUpload name={"Doctor"} onChange={handleImageChange} />
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

export default AddDoctorPage;
