import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "@/page/home";
import { NotFound, RootErrorBoundary } from "./page";
import { store } from "./store";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} errorElement={<RootErrorBoundary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
