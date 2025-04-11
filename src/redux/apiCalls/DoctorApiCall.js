import { toast } from "react-toastify";
import { doctorAction } from "../slices/doctorSlice";
import { request } from "../../utils/request";
import { getIdCookie } from "../../utils/cookies";
const user = getIdCookie();

export const getAllDoctors = (query) => {
  return async (dispatch) => {
    dispatch(doctorAction.setLoading());
    try {
      const { data } = await request.get(
        `/users?page=${query.page}&perPage=${query.perPage}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(doctorAction.setDoctors(data.users));
      dispatch(doctorAction.setDocumentCount(data.documentCount));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);
    } finally {
      dispatch(doctorAction.setLoading());
    }
  };
};
