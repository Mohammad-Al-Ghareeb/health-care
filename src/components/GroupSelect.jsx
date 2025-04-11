import React, { useState } from "react";

const GroupSelect = ({ label, selectedGroups }) => {
  const [selectedGroup, setSelectedGroup] = useState("");

  const handleChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  return (
    <div className="mb-4 transition-[0.3s]">
      <label className="block mb-[0.5rem] text-sm text-[#212529] font-medium transition-[0.3s]">
        {label}
      </label>
      <select
        value={selectedGroup}
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
