import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound, RootErrorBoundary } from "./page";

import { Home } from "@/page/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<RootErrorBoundary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
