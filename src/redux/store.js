import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/authSlice";
import { doctorReducer } from "./slices/doctorSlice";
import { patientReducer } from "./slices/patientSlice";
import { specificReducer } from "./slices/specificSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
    patient: patientReducer,
    specific: specificReducer,
  },
});

export default store;
