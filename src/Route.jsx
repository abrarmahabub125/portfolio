import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <div>Loading</div>,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: About,
        loader: async () => {
          return {
            promise: fetch("https://jsonplaceholder.typicode.com/todos/1").then(
              (res) => res.json(),
            ),
          };
        },
      },
    ],
  },
]);

export default router;
