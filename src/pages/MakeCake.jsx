import React from 'react';
import Head2 from '../components/Heads/Head2';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import { styled } from 'styled-components';

const CakeBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: #000000;
  border-radius: 30px;
  margin-bottom: 10px;
  display: flex;
  margin-top: 10px;
  margin-left: 0px;
`;

const CakeBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`;

const MakeCake = () => {
  return (
    <>
      <Layout color="#FFF5E4">
        <Head2></Head2>
        <Wrapper Top="100px" Bottom="90px" position="relative" display="flex">
          <CakeBoxContainer>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
          </CakeBoxContainer>
        </Wrapper>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default MakeCake;