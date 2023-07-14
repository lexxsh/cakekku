import React from 'react';
import styled from 'styled-components';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import MarketBoxSearchsi from '../../components/Marketboxsearch/MaketBoxSearchsi';
import Wrapper from '../../components/Wrapper';
const Box = styled.div`
    width: 350px;
    height: 700px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    position: relative;
    top:90px;
    Bottom:15px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    align-content: space-evenly;
    align-items: center;
   
` 
const Searchresultsi = () => {
    return (
       <>
       <Layout color="#FFF5E4">
       <Head2></Head2>
       <Wrapper 
        Top = "70px"
        Bottom = "90px">
       <Box>
        <MarketBoxSearchsi index={0}></MarketBoxSearchsi>
        <MarketBoxSearchsi index={1}></MarketBoxSearchsi>
        <MarketBoxSearchsi index={2}></MarketBoxSearchsi>
        <MarketBoxSearchsi index={3}></MarketBoxSearchsi>
        
        
       </Box>
       </Wrapper>
       <Footer></Footer>
       </Layout>
       </>
    );
};

export default Searchresultsi;