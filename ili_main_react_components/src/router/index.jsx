import { useRoutes } from "react-router-dom";
import WelcomePage from "../pages/Welcome/WelcomePage";
import HomePage from "../pages/Home/HomePage";
import NotFound from "../pages/NotFound/NotFound";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Router;
