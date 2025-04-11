const ModelsCountCard = ({ item }) => {
  const style = {
    backgroundColor: "#ffffff",
    backgroundImage:
      "linear-gradient(to right, rgba(0, 158, 251, 0.80), #ffffff)",
  };

  return (
    <div
      style={style}
      className="w-[350px] rounded-[10px] p-[1rem] bg-amber-300 relative"
    >
      <div>
        <h6 className="mb-[1rem] text-[1.5rem]">{item.text}</h6>
        <p className="text-[1.5rem]">{item.count}</p>
      </div>
      <div
        className="absolute right-0 top-[50%] translate-y-[-50%] flex items-center justify-center bg-[#009efb]
        rounded-tl-[50%] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[50%] p-[33px]"
      >
        {item.icon}
      </div>
    </div>
  );
};

export default ModelsCountCard;
