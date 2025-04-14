import { toast } from "react-toastify";
import { request } from "../../utils/request";
import { getIdCookie } from "../../utils/cookies";
import { ambulanceAction } from "../slices/ambulanceSlice";
const user = getIdCookie();
export const getAllAmbulances = (query) => {
  return async (dispatch) => {
    dispatch(ambulanceAction.setLoading());
    try {
      // Construct the base URL without search if searchTerm is empty/null
      let url = `/ambulances?page=${query.page}&perPage=${query.perPage}`;

      // Add search term only if it exists
      if (query.search) {
        url += `&search=${query.search}`;
      }

      const { data } = await request.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      dispatch(ambulanceAction.setAmbulances(data.ambulances));
      dispatch(ambulanceAction.setDocumentCount(data.documentCount));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message || "Failed to fetch patients");
    } finally {
      dispatch(ambulanceAction.setLoading());
    }
  };
};
