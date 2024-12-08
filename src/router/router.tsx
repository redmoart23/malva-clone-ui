import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WomenPage from "../pages/women-page/WomenPage";
import CartPage from "../pages/cart-page/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/women-page",
    element: <WomenPage />,
  },
  {
    path: "/cart-page",
    element: <CartPage />,
  },
]);
