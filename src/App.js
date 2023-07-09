import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";
import Main from "./pages/MainF.jsx/Main";
import Store from "./pages/Store/Store"
import Search from "./pages/Search"
import GlobalStyle from "./components/Globalstyle";
import MakeCake from "./pages/MakeCake";
import MyLike from "./pages/MyLike";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Loading" element={<Loading />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/MakeCake" element={<MakeCake />} />
        <Route path="/MyLike" element={<MyLike />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
