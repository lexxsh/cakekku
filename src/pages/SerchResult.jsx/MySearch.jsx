import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import MySearchbox from '../../components/Marketboxsearch/MySearchMarketbox';
import axios from 'axios';
import Wrapper from '../../components/Wrapper';

const Box = styled.div`
  width: 350px;
  height: 700px;
  background-color: rgba(255, 255, 255, 0.50);
  margin: 0 auto;
  position: relative;
  top: 90px;
  bottom: 15px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  align-items: center;
`;

const MySearch = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  console.log(searchQuery);
  const [infor, setInfor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/searchmarket/?search=${searchQuery}`)
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
        <Head2 />
        <Wrapper Top='4rem'>
        
          {infor.map((item, index) => (
            <MySearchbox key={index} index={index} search={searchQuery} />
          ))}
    
        </Wrapper>
        <Footer />
      </Layout>
    </>
  );
};

export default MySearch;
