import { toast } from "react-toastify";
import { request } from "../../utils/request";
import { getIdCookie } from "../../utils/cookies";
import { pharmacyAction } from "../slices/pharmacySlice";
const user = getIdCookie();
export const getAllPharmacies = (query) => {
  return async (dispatch) => {
    dispatch(pharmacyAction.setLoading());
    try {
      let url = `/pharmacies?page=${query.page}&perPage=${query.perPage}`;

      if (query.search) {
        url += `&search=${query.search}`;
      }

      const { data } = await request.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      dispatch(pharmacyAction.setPharmacies(data.pharmacies));
      dispatch(pharmacyAction.setDocumentCount(data.documentCount));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message || "Failed to fetch patients");
    } finally {
      dispatch(pharmacyAction.setLoading());
    }
  };
};
