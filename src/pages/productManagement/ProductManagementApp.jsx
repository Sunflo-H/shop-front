import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import { initProducts } from "../../slice/productsManagement/productManagementSlice";
import Header from "../../layout/manage/Header";
import Main from "../../layout/manage/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../../store";

export default function ProductManagementApp() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <Header />
          <div className="flex self-center max-w-screen-2xl w-screen mt-4 ">
            <Main />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
