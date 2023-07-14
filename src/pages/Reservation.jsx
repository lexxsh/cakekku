import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head2 from '../components/Heads/Head2';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import axios from 'axios';
import ReservationBox from '../components/ReservationBox';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();

  const navigatetoMain = () => {
    navigate("/Reservation/detail1");
  };

  const navigatetoMain2 = () => {
    navigate("/Reservation/detail2");
  };

  const navigatetoMain3 = () => {
    navigate("/Reservation/detail3");
  };

  const navigatetoMain4 = () => {
    navigate("/Reservation/detail4");
  };

  const [infor, setInfor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/myorderlist/`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Layout color='#FFF5E4'>
      <Head2></Head2>
      <Wrapper Top="70px" Bottom="80px">
        {infor.map((item, index) => (
            <ReservationBox key={index} index={index} onClick={navigatetoMain}  />
          ))}
      </Wrapper>
      <Footer></Footer>
    </Layout>
  );
};

export default Reservation;
