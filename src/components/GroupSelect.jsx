import React from "react";

const GroupSelect = ({ label, selectedGroups, name, value, onChange }) => {
  const handleChange = (event) => {
    // Call the parent's onChange with the same event structure as other inputs
    onChange({
      target: {
        name: name,
        value: event.target.value,
      },
    });
  };

  return (
    <div className="mb-4 transition-[0.3s]">
      <label className="block mb-[0.5rem] text-sm text-[#212529] font-medium transition-[0.3s]">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="transition-[0.3s] block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-[#212529] cursor-pointer"
      >
        <option value="" disabled className="text-[#212529]">
          Select {label} Group
        </option>
        {selectedGroups?.map((group) => (
          <option key={group} value={group} className="text-[#212529]">
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupSelect;

// import React from "react";

// const GroupSelect = ({
//   label,
//   options, // Changed from selectedGroups to options for clarity
//   name,
//   value,
//   onChange,
//   idKey = "_id", // Key to use for ID
//   displayKey = "name", // Key to display in options
// }) => {
//   const handleChange = (event) => {
//     const selectedId = event.target.value;
//     const selectedOption = options.find((opt) => opt[idKey] === selectedId);

//     onChange({
//       target: {
//         name: name,
//         value: selectedOption, // Sends the entire selected object
//         // OR if you just want the ID:
//         // value: selectedId
//       },
//     });
//   };

//   return (
//     <div className="mb-4 transition-[0.3s]">
//       <label className="block mb-[0.5rem] text-sm text-[#212529] font-medium transition-[0.3s]">
//         {label}
//       </label>
//       <select
//         name={name}
//         value={value?.[idKey] || ""} // Use the ID for value
//         onChange={handleChange}
//         className="transition-[0.3s] block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-[#212529] cursor-pointer"
//       >
//         <option value="" disabled className="text-[#212529]">
//           Select {label}
//         </option>
//         {options?.map((item) => (
//           <option
//             key={item[idKey]}
//             value={item[idKey]}
//             className="text-[#212529]"
//           >
//             {item[displayKey]}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default GroupSelect;
