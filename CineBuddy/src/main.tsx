import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import MovieDetailPage from "./pages/MovieDetailPage.tsx";
import ErrorPage from "./error-page.tsx";
import RightHomePage from "./pages/RightHomePage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/:homeId",
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
