import { Outlet } from "react-router-dom";
import Header from "./components/shop/header/Header";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/shop/footer/Footer";
import store from "./store";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthCheck from "./components/authCheck/AuthCheck";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <AuthCheck /> {/* 인증 확인을 위한 컴포넌트 */}
        <QueryClientProvider client={queryClient}>
          {/* <AuthProvider> */}
          <Header />
          <Outlet />
          {/* </AuthProvider> */}
          <Footer />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
