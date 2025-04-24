import React, { useRef } from "react";

const ImageUpload = ({ name, onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const fileName = event.target.files[0] || "Choose file...";
    fileInputRef.current.value = fileName;
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-gray-700 font-medium">
        {name} Image
      </label>
      <div className="flex items-center">
        <input
          type="file"
          ref={fileInputRef}
          //   readOnly
          onChange={onChange}
          placeholder="Choose file..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="button"
          onClick={handleBrowseClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
        >
          Browse
        </button>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
