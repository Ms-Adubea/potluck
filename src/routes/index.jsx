// routes/index.jsx
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import DashboardLayout from "../layouts/DashboardLayout";

import PotchefOverview from "../pages/dashboards/potchef/Overview";
import PotchefMeals from "../pages/dashboards/potchef/Meals";
import PotchefOrders from "../pages/dashboards/potchef/Orders";



export const routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },

  {
    path: "/dashboard/:role",
    element: <DashboardLayout />,
    children: [
      { path: "overview", element: <PotchefOverview /> },
      { path: "meals", element: <PotchefMeals /> },
      { path: "orders", element: <PotchefOrders /> },
      // Add more role-based pages here later
    ],
  },
];
