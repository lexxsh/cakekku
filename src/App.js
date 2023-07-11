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
import Reservation from "./pages/Reservation";
import Myreivew from "./pages/Myreview";
import MyPage from "./pages/MyPage";
import Reservationdetail from "./pages/Reservationpage/detail1";
import Reservationdetail2 from "./pages/Reservationpage/detail2";
import Review1 from "./pages/Reviewpage/review1"
import Review2 from "./pages/Reviewpage/review2"
import Review3 from "./pages/Reviewpage/review3"


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
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Myreview" element={<Myreivew />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Reservation/detail1" element={<Reservationdetail/>}/>
        <Route path="/Reservation/detail2" element={<Reservationdetail2/>}/>
        <Route path="/Myreview/review1" element={<Review1/>}/>
        <Route path="/Myreview/review2" element={<Review2/>}/>
        <Route path="/Myreview/review3" element={<Review3/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
