import React from 'react';
import Head2 from '../components/Heads/Head2'
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import MarketBox from '../components/MaketBox';
import Wrapper from '../components/Wrapper';

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
    return (
        <Layout color = '#FFF5E4'>
        <Head2></Head2>
        <Wrapper 
        Top = "70px"
        Bottom = "90px">
        <Box>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        <MarketBox Top="5px" Bottom="10px"></MarketBox>
        </Box>
        </Wrapper>
        <Footer></Footer>
        </Layout>
    );
};

export default MyLike;