import { toast } from "react-toastify";
import { patientAction } from "../slices/patientSlice";
import { request } from "../../utils/request";
import { getIdCookie } from "../../utils/cookies";
const user = getIdCookie();
export const getAllPatients = (query) => {
  return async (dispatch) => {
    dispatch(patientAction.setLoading());
    try {
      // Construct the base URL without search if searchTerm is empty/null
      let url = `/users?page=${query.page}&perPage=${query.perPage}`;

      // Add search term only if it exists
      if (query.search) {
        url += `&search=${query.search}`;
      }


      const { data } = await request.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
        console.log(data);

      dispatch(patientAction.setPatients(data.users));
      dispatch(patientAction.setDocumentCount(data.documentCount));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message || "Failed to fetch patients");
    } finally {
      dispatch(patientAction.setLoading());
    }
  };
};
