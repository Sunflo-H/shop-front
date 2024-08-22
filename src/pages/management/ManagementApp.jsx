import { Provider } from "react-redux";
import Header from "../../layout/manage/Header";
import Main from "../../layout/manage/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../../store";
import Nav from "../../layout/manage/Nav";

export default function ManagementApp() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="manage-font flex flex-col min-h-screen bg-lightblue">
          {/* <div className="flex flex-col min-h-screen bg-gray-200 "> */}
          {/* <Header /> */}
          <div className="flex self-center grow max-w-screen-2xl w-screen mt-4 ">
            <Nav />
            <Main />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
