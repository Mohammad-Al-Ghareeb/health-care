const buttonStyle = {
  fontSize: "14px",
  outline: "none",
  padding: "0.625rem 1rem",
  minWidth: "120px",
};

const CustomButton = ({ bgColor, onClick, className, children }) => {
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className={`px-4 py-2 rounded-md hover:opacity-80 transition ${bgColor} mr-[2px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
