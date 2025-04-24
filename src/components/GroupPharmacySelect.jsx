import React from "react";

const GroupPharmacySelect = ({
  label,
  selectedGroups,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-[15px]">
      <label className="block text-[13px] font-medium text-[#0000008a] mb-1">
        {label}
      </label>
      <select
        className="w-full h-[34px] px-[12px] py-[6px] text-[13px] border border-[#0000001a] rounded focus:outline-none focus:border-[#009efb]"
        value={value}
        onChange={onChange}
        name={name}
      >
        <option value="">Select a {name}</option>
        {selectedGroups.map((pharmacy) => (
          <option key={pharmacy._id} value={pharmacy._id}>
            {pharmacy.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default GroupPharmacySelect;
