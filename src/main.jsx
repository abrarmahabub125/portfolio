import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import router from "./Route";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
