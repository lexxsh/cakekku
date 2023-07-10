import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import {AiFillWechat} from "react-icons/ai";

const ResTtitle = styled.p`
    color: #000;
text-align: center;
font-family: Preahvihear;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 34px;
letter-spacing: -0.6px;
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
    background-color: #FF9494;
    border-radius: 50%;
    margin:20px;
`
const Circle2 = styled.div`
    width: 20px;
    height: 20px;
    background-color: #FF9494;
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
    background-color: #FF9494;
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
color: #000;
text-align: center;
font-family: Inter;
font-size: 11px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
margin:20px;
margin-top: 30px;
`

const Container = styled.div`
  //background-color: #ffffff;
  padding: 10px;
  width: 266px;
    flex-shrink: 0;
  border-radius: 24px;
  margin: 0 auto;
  border: 1px solid #8F8F8F;
`;

const Text = styled.div`
color: #8F8F8F;
text-align: center;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
`
const MainCircle = styled.div`
    width: 150px;
    height: 150px;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin:20px;
`
const Button = styled.button`
    width: 246px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFD7D7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:30px;
    border: 1px solid #FF9494;
    color: #000;
text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
`

const detail2 = () => {
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
            <MainCircle>
            <AiFillWechat size="150px" color="#FF9494"></AiFillWechat>
                </MainCircle> 

            <Container>
                <Text>
                    <br/>
                    주문하신 내용에 관해 상담이 필요합니다.<br/>
                    <br/>
                    아래 오픈카카오채팅 방을 이용하여 예약하신 <br/>
                    성함, 전화번호를 남겨주신 다면 최대한 빠르게<br/>
                    상담을 도와드리겠습니다.<br/>
                <br/>
                </Text>
            </Container>
            <Button>바로가기</Button>
        </Box>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default detail2;