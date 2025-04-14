import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  pharmacies: [],
  documentCount: 0,
};

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState,
  reducers: {
    setPharmacies: (state, action) => {
      state.pharmacies = action.payload;
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

const pharmacyAction = pharmacySlice.actions;
const pharmacyReducer = pharmacySlice.reducer;

export { pharmacyAction, pharmacyReducer };
