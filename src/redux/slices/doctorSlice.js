import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  doctors: [],
  documentCount: 0,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setDoctors: (state, action) => {
      state.doctors = action.payload;
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

const doctorAction = doctorSlice.actions;
const doctorReducer = doctorSlice.reducer;

export { doctorAction, doctorReducer };
