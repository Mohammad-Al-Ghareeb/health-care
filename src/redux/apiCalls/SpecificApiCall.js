import { toast } from "react-toastify";
import { specificAction } from "../slices/specificSlice";
import { request } from "../../utils/request";
import { getIdCookie } from "../../utils/cookies";
const user = getIdCookie();
export const getAllSpecifics = (query) => {
  return async (dispatch) => {
    dispatch(specificAction.setLoading());
    try {
      let url = `/specifics?page=${query.page}&perPage=${query.perPage}`;

      if (query.search) {
        url += `&search=${query.search}`;
      }

      const { data } = await request.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      dispatch(specificAction.setSpecifics(data.specifics));
      dispatch(specificAction.setDocumentCount(data.documentCount));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message || "Failed to fetch specifics");
    } finally {
      dispatch(specificAction.setLoading());
    }
  };
};

export const addSpecific = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(specificAction.setLoading());
    try {
      await request.post(`/specifics`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          // "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Specifics Added successfully");
      navigate("/specifics/list");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);
    } finally {
      dispatch(specificAction.setLoading());
    }
  };
};
