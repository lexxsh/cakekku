import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
<<<<<<< HEAD


const App = () => {

=======
import Store from "./pages/Store/Store";
import GlobalStyle from "./components/Globalstyle";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

window.addEventListener('resize', () => setScreenSize());

  
>>>>>>> 3a78ff34f52994eb12407bb3867747f7b9e0f882
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Loading" element={<Loading />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Store" element={<Store />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
