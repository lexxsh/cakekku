import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
const ResTtitle = styled.p`
    font-size: 25px;
`
const Box = styled.div`
        width: 350px;
    height: 700px;
    margin: 0 auto;
    position: relative;
    top:9%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
`  
const Circlebox = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 5;
    
`
const Circle1 = styled.div`
    width: 20px;
    height: 20px;
    background-color: pink;
    border-radius: 50%;
    margin:20px;
`
const Circle2 = styled.div`
    width: 20px;
    height: 20px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin:20px;
`
const Circle3 = styled.div`
    width: 20px;
    height: 20px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin:20px;
`
const Circle4 = styled.div`
    width: 20px;
    height: 20px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin:20px;
`
const Line1=styled.div`
    width: 50px;
    height: 2px;
    background-color: #D9D9D9;
    margin-left:30px;
`
const Line2=styled.div`
    width: 60px;
    height: 2px;
    background-color: #D9D9D9;
    margin-left:10px;
`
const Line3=styled.div`
    width: 40px;
    height: 2px;
    background-color: #D9D9D9;
    margin-left:0px;
`
const Linebox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -30px;
    margin-top: -30px;
`
const Lineboxtext = styled.div`
    display: flex;
    flex-direction: row;
`
const LineText = styled.p`
font-size: 15px;
margin:15px;
margin-top: 30px;
`
const detail1 = () => {
    return (
        <><Layout color="white">
        <Head2></Head2>
        <Box>
            <ResTtitle>예약 진행상황</ResTtitle>
            <Circlebox>
                <Circle1></Circle1>
                <Circle2></Circle2>
                <Circle3></Circle3>
                <Circle4></Circle4>
            </Circlebox>
            <Linebox>
                <Line1></Line1>
                <Line2></Line2>
                <Line3></Line3>
            </Linebox>
            <Lineboxtext>
                <LineText>대기</LineText>
                <LineText>상담</LineText>
                <LineText>결제</LineText>
                <LineText>완료</LineText>
            </Lineboxtext>   
        </Box>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default detail1;