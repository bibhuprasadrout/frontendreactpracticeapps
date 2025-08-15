import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "../app/routes";
import CommonLandingPage from "./modules/CommonLandingPage";
import { Outlet } from "react-router";
const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <CommonLandingPage />
      </RouterProvider>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
