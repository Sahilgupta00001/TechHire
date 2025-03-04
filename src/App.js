import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/LoginPage.jsx";
import Signup from "./components/pages/Signup.jsx";
import CompanyDashboard from "./components/pages/CompanyDashboard.jsx";
import UserProfile from "./components/pages/UserProfile.jsx";

function App() {
  const userouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/company-dashboard",
      element: <CompanyDashboard />,
    },
    {
      path: "/user-profile",
      element: <UserProfile />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={userouter} />
    </div>
  );
}

export default App;
