import React, { useState } from "react";

const SelectComponent = ({ selectArray, title }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <label className="mb-[1rem] text-sm text-gray-800 font-medium block">
        {title}
      </label>
      <div className="flex">
        {selectArray?.map((e, id) => {
          return (
            <label key={id} className="flex items-center mr-6 cursor-pointer">
              <input
                type="radio"
                value={e.name}
                checked={selectedGender === e.name}
                onChange={handleChange}
                className="hidden peer" // Hide the default radio button
              />
              <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2 peer-checked:border-blue-500 peer-checked:bg-blue-500">
                <span className="hidden w-2 h-2 bg-white rounded-full peer-checked:block"></span>
              </span>
              {e.name}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SelectComponent;
