import React from 'react';
import styled from  'styled-components'
import Footer from '../../components/Footer';
import MainTop from './MainTop';
import Layout from '../../components/Layout';
import MarketBox from '../../components/MaketBox';
const Main = () => {
    return (
        
        <>
        <Layout color = '#FFF5E4'>
        <MainTop></MainTop>
        <MarketBox></MarketBox>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default Main;                            