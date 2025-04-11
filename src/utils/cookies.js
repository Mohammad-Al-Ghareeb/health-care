import Cookies from "universal-cookie";
export const cookies = new Cookies();

export const setIdCookie = (userId) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1000000000000);
  cookies.set("HealthCareId", userId, {
    path: "/",
    expires: expirationDate,
  });
};

export const getIdCookie = () => {
  return cookies.get("HealthCareId");
};

export const deleteIdCookie = () => {
  cookies.remove("HealthCareId", { path: "/" });
};
