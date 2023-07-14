import React from 'react';
import styled from  'styled-components'
import Footer from '../../components/Footer';
import MainTop from './MainTop';
import Layout from '../../components/Layout';
import MarketBox from '../../components/MaketBox';
import Head from '../../components/Heads/Head';
import Wrapper from '../../components/Wrapper';
import TopWrapper from '../../components/TopWrapper';
import { useState } from 'react';
const Main = () => {
    const [sort, setSort] = useState('');

    



    return ( 
        <>
        <Layout color = '#FFF5E4'>
        
        <Head></Head>
        <TopWrapper>
        <MainTop setSort={setSort}></MainTop>
        </TopWrapper>
        <Wrapper>
        <MarketBox index={0} sort={sort}></MarketBox>
        <MarketBox index={1} sort={sort}></MarketBox>
        <MarketBox index={2} sort={sort}></MarketBox>
        <MarketBox index={3} sort={sort}></MarketBox>
        <MarketBox index={0} sort={sort}></MarketBox>
        <MarketBox index={1} sort={sort}></MarketBox>
        <MarketBox index={2} sort={sort}></MarketBox>
        </Wrapper>
        <Footer></Footer>

        </Layout>

        </>
    );
};

export default Main;                            