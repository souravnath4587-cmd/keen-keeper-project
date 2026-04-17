import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import FriendContactProvider from "./components/context/FriendContactProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendContactProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendContactProvider>
  </StrictMode>,
);
