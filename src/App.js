import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Loading" element={<Loading />} />
        <Route path="/Main" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
