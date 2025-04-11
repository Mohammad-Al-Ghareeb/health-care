import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, error: null, profile: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login Admin
    login: (state, action) => {
      state.profile = action.payload;
    },

    //LOADING:
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

const userAction = authSlice.actions;
const userReducer = authSlice.reducer;

export { userAction, userReducer };
