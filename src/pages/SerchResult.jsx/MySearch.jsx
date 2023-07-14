import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import MySearchbox from '../../components/Marketboxsearch/MySearchMarketbox';

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
console.log( searchQuery);
  return (
    <>
      <Layout color="#FFF5E4">
        <Head2 />
        <Box>
          <MySearchbox index={0} sort={searchQuery} />
          <MySearchbox index={1} sort={searchQuery} />
          <MySearchbox index={2} sort={searchQuery} />
          <MySearchbox index={3} sort={searchQuery} />
        </Box>
        <Footer />
      </Layout>
    </>
  );
};

export default MySearch;
