import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import MovieDetailPage from "./pages/MovieDetailPage.tsx";
import ErrorPage from "./error-page.tsx";
import RightHomePage from "./pages/RightHomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <RightHomePage />,
      },
    ],
  },

  {
    path: "/movieDetails/:movieId",
    element: <MovieDetailPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
