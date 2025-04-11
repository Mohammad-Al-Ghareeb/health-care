import { VscChromeClose } from "react-icons/vsc";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import { useEffect, useRef } from "react";

const AddPrescriptionComponent = ({
  isPrescriptionOpen,
  setIsPrescriptionOpen,
}) => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      if (isPrescriptionOpen) {
        modalRef.current.classList.remove("opacity-0", "translate-y-[-20px]");
        modalRef.current.classList.add("opacity-100", "translate-y-[23px]");
      } else {
        modalRef.current.classList.remove("opacity-100", "translate-y-[23px]");
        modalRef.current.classList.add("opacity-0", "translate-y-[-20px]");
      }
    }
  }, [isPrescriptionOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isPrescriptionOpen
      ) {
        setIsPrescriptionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPrescriptionOpen, setIsPrescriptionOpen]);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 h-full w-full p-0  bg-[#000c] flex justify-center items-start transform transition-all duration-300 ease-out ${
        isPrescriptionOpen ? "opacity-100 z-50" : "opacity-0 z-[-19]"
      }`}
    >
      <div
        ref={modalRef}
        className="bg-[#fff] w-[900px] h-[580px] rounded-[0.3rem] transform transition-all duration-300 ease-out opacity-0 translate-y-[-20px]"
      >
        <div className="p-[1rem] bg-[#009efb] flex items-center justify-between">
          <p className="text-[1.5rem] text-[#fff] font-[500]">
            Make a prescription
          </p>
          <p onClick={() => setIsPrescriptionOpen(false)}>
            <VscChromeClose color="#fff" size={25} className="cursor-pointer" />
          </p>
        </div>
        <div className="pl-[15px] pr-[15px]">
          <div className="p-[1.5rem] border border-l-0 border-r-0 border-t-0 border-[#0000001a]">
            <p className="text-[1rem] text-[#000] font-[500]">
              PATIENT INFORMATION
            </p>
          </div>

          <div className="p-[1.5rem] grid grid-cols-3 gap-[15px]">
            <InputComponent
              label={"Patient Name"}
              placeholder={"Enter Name"}
              name={"username"}
              margin={true}
            />

            <InputComponent
              label={"Date Of Birth"}
              placeholder={"Enter date of birth"}
              name={"dateOfBirth"}
              margin={true}
            />

            <InputComponent
              label={"Address"}
              placeholder={"Enter address"}
              name={"address"}
              margin={true}
            />

            <InputComponent
              label={"Phone Number"}
              placeholder={"Enter phone number"}
              name={"phoneNumber"}
              margin={true}
            />

            <InputComponent
              label={"Medication"}
              placeholder={"Enter medication"}
              name={"medication"}
              margin={true}
            />

            <InputComponent
              label={"Period Of medication"}
              placeholder={"Enter period of medication"}
              name={"periodOfMedication"}
              margin={true}
            />

            <InputComponent
              label={"Appointment With"}
              placeholder={"Enter doctor name"}
              name={"doctorName"}
              margin={true}
            />
          </div>
          <div className="p-[1.5rem]">
            <CustomButton
              bgColor="bg-[#009efb]"
              onClick={() => {}}
              className={"text-[#fff]"}
            >
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrescriptionComponent;
