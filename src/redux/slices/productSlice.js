import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  products: [],
  documentCount: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setDocumentCount: (state, action) => {
      state.documentCount = action.payload;
    },
    //LOADING:
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

const productAction = productSlice.actions;
const productReducer = productSlice.reducer;

export { productAction, productReducer };
