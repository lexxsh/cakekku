import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head2 from '../components/Heads/Head2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import StarReivew from '../components/Star/StarReivew';
import axios from 'axios';
import ReserBox from '../components/ReserBox';
import { useNavigate } from 'react-router-dom';

const Myreview = () => {
  const [infor, setInfor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/myreviewlist/`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

  }, []);

  const navigate = useNavigate();
  const navigatetoMain = () => {
    navigate("/Myreview/review1");
  };
  return (
    <>
      <Layout color="#FFF5E4">
        <Head2></Head2>
        <Wrapper Top="70px" Bottom="80px">
        {infor.map((item, index) => (
            <ReserBox key={index} index={index} onClick={navigatetoMain}  />
          ))}
          <StarReivew></StarReivew>
        </Wrapper>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Myreview;
