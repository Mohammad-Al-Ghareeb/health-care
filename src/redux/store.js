import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/authSlice";
import { doctorReducer } from "./slices/doctorSlice";
import { patientReducer } from "./slices/patientSlice";
import { specificReducer } from "./slices/specificSlice";
import { ambulanceReducer } from "./slices/ambulanceSlice";
import { pharmacyReducer } from "./slices/pharmacySlice";
import { productReducer } from "./slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
    patient: patientReducer,
    specific: specificReducer,
    ambulance: ambulanceReducer,
    pharmacy: pharmacyReducer,
    product: productReducer,
  },
});

export default store;
