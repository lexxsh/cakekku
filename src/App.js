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
import Reservationdetail3 from "./pages/Reservationpage/detail3";
import Reservationdetail4 from "./pages/Reservationpage/detail4";
import Review1 from "./pages/Reviewpage/review1"
import Review2 from "./pages/Reviewpage/review2"
import Review3 from "./pages/Reviewpage/review3"
import Order1 from "./pages/Orderpage/Order1";
import Searchresult1 from "./pages/SerchResult.jsx/Searchresult1";
import Searchresult2 from "./pages/SerchResult.jsx/Searchresult2";
import Searchresult3 from "./pages/SerchResult.jsx/Searchresult3";
import Searchresult4 from "./pages/SerchResult.jsx/Searchresult4";
import Searchresult5 from "./pages/SerchResult.jsx/Searchresult5";
import Searchresultsi from "./pages/SerchResult.jsx/Searchresultsi";
import MySearch from "./pages/SerchResult.jsx/MySearch";
import DesignMain from "./pages/DesginCake/DesignMain";
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
        <Route path="/marketdetail/:store_id" element={<Store />} />
        <Route path="/MakeCake" element={<MakeCake />} />
        <Route path="/MyLike" element={<MyLike />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Myreview" element={<Myreivew />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Reservation/detail1" element={<Reservationdetail/>}/>
        <Route path="/Reservation/detail2" element={<Reservationdetail2/>}/>
        <Route path="/Reservation/detail3" element={<Reservationdetail3/>}/>
        <Route path="/Reservation/detail4" element={<Reservationdetail4/>}/>
        <Route path="/Myreview/review1" element={<Review1/>}/>
        <Route path="/Myreview/review2" element={<Review2/>}/>
        <Route path="/Myreview/review3" element={<Review3/>}/>
        <Route path="/DesignMain" element={<DesignMain/>}/>
        <Route path="/Order1" element={<Order1/>}/>
        <Route path="/Searchresult1" element={<Searchresult1/>}/>
        <Route path="/Searchresult2" element={<Searchresult2/>}/>
        <Route path="/Searchresult3" element={<Searchresult3/>}/>
        <Route path="/Searchresult4" element={<Searchresult4/>}/>
        <Route path="/Searchresult5" element={<Searchresult5/>}/>
        <Route path="/Searchresultsi" element={<Searchresultsi/>}/>
        <Route path="/MySearch" element={<MySearch/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
