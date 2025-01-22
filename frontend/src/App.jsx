import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Basket from "./page/Basket";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Pages from "./page/Pages";
import Promotion from "./page/Promotion";
import Shop from "./page/Shop";
import Wishlist from "./page/Wishlist";
import Admin from "./page/Admin";
import ProductDetailPage from "./page/ProductDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },

        {
          path: "/shop",
          element: <Shop />,
        },

        {
          path: "/promotion",
          element: <Promotion />,
        },

        {
          path: "/pages",
          element: <Pages />,
        },

        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },

        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />{" "}
    </>
  );
};

export default App;
