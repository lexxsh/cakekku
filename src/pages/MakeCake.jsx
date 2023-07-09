import React from 'react';
import Head2 from '../components/Heads/Head2'
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
const Box = styled.div`
        width: 350px;
    height: 700px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    position: relative;
    top:9%;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
`   
const CakeBox = styled.div`
    width: 150px;
    height: 150px;
    background-color: #000000;
    border-radius: 30px;
`
const MakeCake = () => {
    return (
        <>
        <Layout color = '#FFF5E4'>
        <Head2></Head2>
        <Box>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox>
            <CakeBox></CakeBox><CakeBox></CakeBox>
        </Box>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default MakeCake;