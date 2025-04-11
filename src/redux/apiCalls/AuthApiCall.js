import { request } from "../../utils/request";
import { toast } from "react-toastify";
import { setIdCookie } from "../../utils/cookies";
import { userAction } from "../slices/authSlice";

export const LoginAdmin = (userData) => {
  return async (dispatch) => {
    dispatch(userAction.setLoading());
    try {
      const { data } = await request.post("/auth/login_admin", userData);
      setIdCookie(data?.user);
      toast.success(data?.message);
      if (userData.navigate) {
        userData.navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);
    } finally {
      dispatch(userAction.setLoading());
    }
  };
};
