import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import DoctorsPage from "./pages/DoctorsPage";
import AddDoctorPage from "./pages/AddDoctorPage";
import AddPatientPage from "./pages/AddPatientPage";
import PatientsPage from "./pages/PatientsPage";
import SpecificsPage from "./pages/SpecificPage";
import AddSpecificPage from "./pages/AddSpecificPage";
import OrdersPage from "./pages/OrdersPage";
import AmbulancesPage from "./pages/AmbulancesPage";
import AddAmbulancePage from "./pages/AddAmbulancePage";
import PharmaciesPage from "./pages/PharmaciesPage";
import AddPharmacyPage from "./pages/AddPharmacyPage";
import PrescriptionsPage from "./pages/PrescriptionsPage";
import ReportsPage from "./pages/ReportsPage";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/doctors",
    element: <Dashboard />,
    children: [
      { path: "list", element: <DoctorsPage /> },
      { path: "add-doctor", element: <AddDoctorPage /> },
    ],
  },
  {
    path: "/patients",
    element: <Dashboard />,
    children: [
      { path: "list", element: <PatientsPage /> },
      { path: "add-patient", element: <AddPatientPage /> },
    ],
  },
  {
    path: "/specifics",
    element: <Dashboard />,
    children: [
      { path: "list", element: <SpecificsPage /> },
      { path: "add-specific", element: <AddSpecificPage /> },
    ],
  },
  {
    path: "/orders",
    element: <Dashboard />,
    children: [{ path: "list", element: <OrdersPage /> }],
  },
  {
    path: "/ambulances",
    element: <Dashboard />,
    children: [
      { path: "list", element: <AmbulancesPage /> },
      { path: "add-ambulance", element: <AddAmbulancePage /> },
    ],
  },
  {
    path: "/pharmacies",
    element: <Dashboard />,
    children: [
      { path: "list", element: <PharmaciesPage /> },
      { path: "add-pharmacy", element: <AddPharmacyPage /> },
    ],
  },
  {
    path: "/products",
    element: <Dashboard />,
    children: [
      { path: "list", element: <ProductsPage /> },
      { path: "add-product", element: <AddProductPage /> },
    ],
  },
  {
    path: "/prescriptions",
    element: <Dashboard />,
    children: [{ path: "list", element: <PrescriptionsPage /> }],
  },
  {
    path: "/reports",
    element: <Dashboard />,
    children: [{ path: "list", element: <ReportsPage /> }],
  },
  {
    path: "/",
    element: <Home />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
