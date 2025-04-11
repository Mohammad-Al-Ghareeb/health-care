import NotificationComponent from "./NotificationComponent";
import { useEffect, useRef } from "react";

const shadow = {
  boxShadow: "0 1px 24px rgba(0, 0, 0, 0.1)",
};

const HeaderNotifications = ({
  isOpenNotifications,
  setIsOpenNotifications,
}) => {
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target) &&
        isOpenNotifications
      ) {
        setIsOpenNotifications(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenNotifications, setIsOpenNotifications]);

  useEffect(() => {
    if (notificationsRef.current) {
      if (isOpenNotifications) {
        notificationsRef.current.classList.remove(
          "opacity-0",
          "-mt-5",
          "z-[-50]"
        );
        notificationsRef.current.classList.add(
          "opacity-100",
          "mt-[30px]",
          "z-[20]"
        );
      } else {
        notificationsRef.current.classList.remove(
          "opacity-100",
          "mt-[30px]",
          "z-[20]"
        );
        notificationsRef.current.classList.add("opacity-0", "-mt-5", "z-[-50]");
      }
    }
  }, [isOpenNotifications]);

  return (
    <div
      ref={notificationsRef}
      style={shadow}
      className="h-auto w-[300px] absolute top-[300%] right-0 bg-[#fff] rounded-[0.25rem] text-[#212529] border border-[#00000026] z-[-50] opacity-0 -mt-5 transition-all duration-300 ease-out"
    >
      <div className="border border-[#00000026] border-l-0 border-r-0 border-t-0 p-[10px] flex items-center justify-between">
        <p className="text-[.875rem] text-[#6c757d]">Notifications</p>
      </div>

      <NotificationComponent />
      <NotificationComponent />
      <NotificationComponent />
      <NotificationComponent />

      <div className="border border-[#00000026] border-l-0 border-r-0 border-b-0 flex items-center justify-center p-[0.5rem]">
        <p className="text-[#34334a] text-[14px] hover:text-[#007bff] transition-colors duration-300 cursor-pointer">
          View all Notifications
        </p>
      </div>
    </div>
  );
};

export default HeaderNotifications;
