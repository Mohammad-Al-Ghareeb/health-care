import CustomButton from "../components/CusstomButton";
import InputComponent from "../components/InputComponent";
import SpecificComponent from "../components/SpecificComponent";

const AddSpecifics = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-[30px]">
        <SpecificComponent />
        <SpecificComponent />
        <SpecificComponent />
        <SpecificComponent />
      </div>

      <div className="w-[500px] flex items-center mt-4">
        <InputComponent placeholder={"Add Specific"} name={"name"} />
        <CustomButton
          bgColor="bg-[#fda600]"
          className={"text-[#fff] ml-2 h-[40px]"}
          onClick={() => {}}
        >
          Add
        </CustomButton>
      </div>
    </div>
  );
};

export default AddSpecifics;
