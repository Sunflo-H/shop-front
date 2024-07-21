import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/shop/Home";
import MyCart from "./pages/shop/MyCart";
import ProductDetail from "./pages/shop/ProductDetail";
import Products from "./pages/shop/Products";
import ProductsRecommend from "./pages/shop/ProductsRecommend";
import MyFavorites from "./pages/shop/MyFavorites";
import ProtectedRoute_isUser from "./components/protectedRoute/ProtectedRoute_isUser";
import ProductManagement from "./pages/productManagement/ProductManagement";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import UploadProduct from "./pages/productManagement/UploadProduct";
import ProductList from "./components/ProductManagement/main/ProductList/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/products/recommend",
      //   element: <ProductsRecommend />,
      // },
      {
        path: "/products/:category",
        element: <Products />,
      },
      // {
      //   path: "/products/new",
      //   element: (
      //     <ProtectedRoute_isUser requireAdmin>
      //       <UploadProduct />
      //     </ProtectedRoute_isUser>
      //   ),
      // },
      // ! 몽고디비로 바꿈에 따라 변화할 수 있는 페이지
      {
        path: "/products/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute_isUser>
            <MyCart />
          </ProtectedRoute_isUser>
        ),
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute_isUser>
            <MyFavorites />
          </ProtectedRoute_isUser>
        ),
      },
    ],
  },
  {
    path: "/manage",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ProductManagement />
        </Provider>
      </QueryClientProvider>
    ),
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "/manage/new",
        element: <UploadProduct />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
