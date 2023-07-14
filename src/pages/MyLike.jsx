import React from 'react';
import Head2 from '../components/Heads/Head2'
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import LikeMarketbox from '../components/LikeMarketbox';
import Wrapper from '../components/Wrapper';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Box = styled.div`
    width: 350px;
    //height: 700px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    position: relative;
    top:15px;
    Bottom:15px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    align-content: space-evenly;
    align-items: center;
    filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
`   
const MyLike = () => {
    const [infor, setInfor] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://cakekku.shop/mylikelist/`)
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
              <LikeMarketbox key={index} index={index}/>
            ))}
      
          </Wrapper>
          <Footer />
        </Layout>
      </>
    );
  };
  

export default MyLike;