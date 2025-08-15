import { createBrowserRouter } from "react-router";
import CommonLandingPage from "../src/modules/CommonLandingPage";
import Home from "../src/modules/Home";
import HooksExample from "../src/modules/HooksExample";
const router = createBrowserRouter([
  {
    path: "/",
    Component: CommonLandingPage,
    // loader:'',
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/hooks",
        Component: HooksExample,
      },
    ],
  },
  {},
]);

export default router;
