import { toast } from "react-toastify";
import { productAction } from "../slices/productSlice";
import { request } from "../../utils/request";
import { getIdCookie } from "../../utils/cookies";
const user = getIdCookie();
export const getAllProducts = (query) => {
  return async (dispatch) => {
    dispatch(productAction.setLoading());
    try {
      // Construct the base URL without search if searchTerm is empty/null
      let url = `/products?page=${query.page}&perPage=${query.perPage}`;

      // Add search term only if it exists
      if (query.search) {
        url += `&search=${query.search}`;
      }

      const { data } = await request.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      dispatch(productAction.setProducts(data.products));
      dispatch(productAction.setDocumentCount(data.documentCount));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message || "Failed to fetch products");
    } finally {
      dispatch(productAction.setLoading());
    }
  };
};

export const createProduct = (formData, navigate) => {
  return async (dispatch) => {
    for (const [key, value] of Object.entries(formData)) {
      if (key === "image" && value) {
        console.log("image", value); // Append image file
      } else {
        console.log(key, value); // Append other form values
      }
    }
    dispatch(productAction.setLoading());
    try {
      await request.post(`/products`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product Added successfully");
      navigate("/products/list");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);
    } finally {
      dispatch(productAction.setLoading());
    }
  };
};
