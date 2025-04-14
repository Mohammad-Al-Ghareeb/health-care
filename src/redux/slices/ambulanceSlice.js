import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  ambulances: [],
  documentCount: 0,
};

const ambulanceSlice = createSlice({
  name: "ambulance",
  initialState,
  reducers: {
    setAmbulances: (state, action) => {
      state.ambulances = action.payload;
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

const ambulanceAction = ambulanceSlice.actions;
const ambulanceReducer = ambulanceSlice.reducer;

export { ambulanceAction, ambulanceReducer };
