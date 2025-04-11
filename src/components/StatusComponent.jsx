const style = {
  display: "inline-block",
  padding: ".25em .4em",
  fontsize: "75%",
  fontweight: 700,
  lineHeight: 1,
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "baseline",
  borderRadius: ".25rem",
  backgroundColor: "transparent",
  border: "1px solid",
};

const StatusComponent = ({ title, isActive }) => {
  return (
    <div
      style={style}
      className={
        isActive
          ? "border border-[#07be6e] text-[#07be6e]"
          : "border border-[#f9423c] text-[#f9423c]"
      }
    >
      {title}
    </div>
  );
};

export default StatusComponent;
