import Header from "./layout/shop/Header";
import Footer from "./layout/shop/Footer";
import store from "./store";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthCheck from "./components/authCheck/AuthCheck";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Main from "./layout/shop/Main";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="shop-font">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthCheck />
          <Header />
          <Main />
          <Footer />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
