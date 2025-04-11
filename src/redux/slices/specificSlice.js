import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  specifics: [],
  documentCount: 0,
};

const specificSlice = createSlice({
  name: "specific",
  initialState,
  reducers: {
    setSpecifics: (state, action) => {
      state.specifics = action.payload;
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

const specificAction = specificSlice.actions;
const specificReducer = specificSlice.reducer;

export { specificAction, specificReducer };
