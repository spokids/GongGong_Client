import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import routes from "./constants/routes";
import SignUpPage from "./pages/SignUp";
import SignInPage from "@pages/SignIn";
import ProgramFinder from "@pages/ProgramFinder";
import ProgramInfo from "@pages/Detail/ProgramInfo";
import HomePage from "@pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routes.signIn,
        element: <SignInPage />,
      },
      {
        path: routes.signUp,
        element: <SignUpPage />,
      },
      // {
      //   path: routes.Home,
      //   element: <HomePage />,
      // },
      {
        path: routes.ProgramFinder,
        element: <ProgramFinder />,
      },
      {
        path: routes.ProgramInfo,
        element: <ProgramInfo />,
      },
    ],
  },
]);
//
export default router;
