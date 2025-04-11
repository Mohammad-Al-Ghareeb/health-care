import { IoTimeOutline } from "react-icons/io5";
const NotificationComponent = () => {
  return (
    <div className="p-[0.5rem]">
      <div>
        <p className="text-[14px] text-[#4e4e4e]">body of the notification</p>
        <p className="flex items-center text-[10px] text-[#6c757d]">
          <IoTimeOutline className="mr-1" /> 30 minute
        </p>
      </div>
    </div>
  );
};

export default NotificationComponent;
