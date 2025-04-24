import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { LoginAdmin } from "../redux/apiCalls/AuthApiCall";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAdmin({ email, password, navigate }));
  };
  const shadow = {
    boxShadow: " 0 1px 6px 1px rgba(69, 65, 78, 0.1)",
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div
        className="w-[500px] h-[auto]  rounded-[10px] border border-[#555] p-6"
        style={shadow}
      >
        <div className="mb-[25px] flex items-center justify-center">
          <h3 className="text-[25px] font-[500] text-[#555]">
            Please Login with your account
          </h3>
        </div>

        <InputComponent
          onChange={(e) => {
            // console.log(e.target.value);
            setEmail(e.target.value);
          }}
          label={"Email"}
          placeholder={"Enter Email"}
          name={"email"}
          type={"email"}
          margin={true}
        />
        <InputComponent
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label={"Password"}
          placeholder={"Enter Password"}
          name={"password"}
          margin={true}
        />

        <div className="w-[100%] flex items-center justify-center">
          <CustomButton
            className={"bg-[#009efb] text-[#fff]"}
            onClick={handleSubmit}
          >
            <p className="text-[15px]">Login</p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
