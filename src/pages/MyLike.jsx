import React from 'react';
import Head2 from '../components/Heads/Head2'
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import MarketBox from '../components/MaketBox';
const Box = styled.div`
    width: 350px;
    height: 700px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    position: relative;
    top:9%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-evenly;
    align-items: center;
    
`   

const MyLike = () => {
    return (
        <Layout color = '#FFF5E4'>
        <Head2></Head2>
        <Box>
        <MarketBox></MarketBox>
        <MarketBox></MarketBox>
        <MarketBox></MarketBox>
        <MarketBox></MarketBox>
        </Box>
        <Footer></Footer>
        </Layout>
    );
};

export default MyLike;