import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getIdCookie } from "../utils/cookies";

export default function Home() {
  const navigate = useNavigate();
  const userId = getIdCookie();
  useEffect(() => {
    if (userId) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate, userId]);

  return (
    <div className="">
      <Outlet />
    </div>
  );
}
