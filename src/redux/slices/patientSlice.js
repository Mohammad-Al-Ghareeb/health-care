import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  patients: [],
  documentCount: 0,
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatients: (state, action) => {
      state.patients = action.payload;
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

const patientAction = patientSlice.actions;
const patientReducer = patientSlice.reducer;

export { patientAction, patientReducer };
