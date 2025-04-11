import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="bg-[#f6f6f6] h-[100vh] w-full flex">
      <Sidebar />

      <div className="w-[96%] flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto bg-[#f1f5fc]">
          <div className="w-full h-full p-[30px] bg-[#f1f5fc]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
