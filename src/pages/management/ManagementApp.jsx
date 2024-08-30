import { Provider } from "react-redux";
import Main from "../../layout/manage/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from "../../store";
import Nav from "../../layout/manage/Nav";

export default function ManagementApp() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="manage-font flex flex-col min-h-screen h-full bg-lightblue">
          <div className="flex self-center grow max-w-screen-2xl w-screen mt-4 ">
            <Nav />
            <div className="ml-72">
              <Main />
            </div>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={true} />
      </Provider>
    </QueryClientProvider>
  );
}
