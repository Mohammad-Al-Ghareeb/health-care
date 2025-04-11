import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const ReportsPage = () => {
  const patients = [
    {
      createdAt: "1/4/2003",
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      Medication: "Liver Disease Liver DiseaseLiver DiseaseLiver",
      period: "Period Of medicationPeriod Of medication",
      age: 24,
      phone: "123-456-7890",
    },
    {
      createdAt: "1/4/2003",
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      Medication: "Liver Disease Liver DiseaseLiver DiseaseLiver",
      period: "Period Of medicationPeriod Of medication",
      age: 24,
      phone: "123-456-7890",
    },
    {
      createdAt: "1/4/2003",
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      Medication: "Liver Disease Liver DiseaseLiver DiseaseLiver",
      period: "Period Of medicationPeriod Of medication",
      age: 24,
      phone: "123-456-7890",
    },
    {
      createdAt: "1/4/2003",
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      Medication: "Liver Disease Liver DiseaseLiver DiseaseLiver",
      period: "Period Of medicationPeriod Of medication",
      age: 24,
      phone: "123-456-7890",
    },
    {
      createdAt: "1/4/2003",
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      Medication: "Liver Disease Liver DiseaseLiver DiseaseLiver",
      period: "Period Of medicationPeriod Of medication",
      age: 24,
      phone: "123-456-7890",
    },
    {
      createdAt: "1/4/2003",
      name: "Angelica",
      address: "Linden Avenue, Orlando",
      Medication: "Liver Disease Liver DiseaseLiver DiseaseLiver",
      period: "Period Of medicationPeriod Of medication",
      age: 24,
      phone: "123-456-7890",
    },
  ];

  const currentPatients = patients;

  return (
    <div className=" bg-white rounded-lg shadow">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">PATIENT REPORT</h6>
      </div>

      <div className="px-[24px] p-6">
        <table className="min-w-full border-collapse  ">
          <thead>
            <tr className="bg-[#009efb] text-white">
              <th className="p-[0.75rem] text-start ">created At</th>
              <th className="p-[0.75rem] text-start ">Name</th>
              <th className="p-[0.75rem] text-start">Address</th>
              <th className="p-[0.75rem] text-start">Report Type</th>
              <th className="p-[0.75rem] text-start">Report Period</th>
              <th className="p-[0.75rem] text-start">Age</th>
              <th className="p-[0.75rem] text-start">Phone</th>
              <th className="p-[0.75rem] text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients?.map((patient, index) => (
              <tr
                key={index}
                className={
                  index % 2 == 0 ? "bg-[#f2f2f2]" : "bg-[#fff] text-[#212529]"
                }
              >
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.createdAt}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.name}
                </td>
                <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.address}
                </td>
                <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.Medication}
                </td>
                <td className="p-[0.75rem]  border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.period}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.age}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6]  text-[#212529]">
                  {patient.phone}
                </td>
                <td className="p-[0.75rem] border border-l-0 border-r-0 border-b-0 border-t-[#dee2e6] text-[#212529] ">
                  <button className="text-blue-500 cursor-pointer">
                    <FaPencil size={18} className="font-[400]" />
                  </button>
                  <button className="text-red-500 ml-2 cursor-pointer">
                    <RiDeleteBin6Line size={18} className="font-[400]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
