import React, { useState, useEffect } from 'react';
import Head2 from '../components/Heads/Head2';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import axios from 'axios';
import CakeBox from '../components/DesignCakebox';
import { styled } from 'styled-components';
const Cake = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
const MakeCake = () => {
  const [infor, setInfor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/mydesigncakelist/`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Layout color="#FFF5E4">
        <Head2></Head2>
        <Wrapper Top="100px" Bottom="90px">
          <Cake>
          {infor.map((item, index) => (
            <CakeBox key={index} index={index} />
          ))}
          </Cake>
        </Wrapper>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default MakeCake;
