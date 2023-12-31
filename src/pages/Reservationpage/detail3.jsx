import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import {BsFillCreditCard2BackFill} from "react-icons/bs";

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
    background-color: #FF9494;
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
    background-color: #FF9494;
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
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    width: 130px;
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
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
margin: 10px;
`
const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:20px;
`
const detail3 = () => {
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
            <BsFillCreditCard2BackFill size="100px" color="#FF9494"></BsFillCreditCard2BackFill>
                </MainCircle> 

            <Container>
                <Text>
                    주문이 거의 완료 되었습니다!<br/>
                    <br/>
                    결제 내역:<br/>
                    종류: 도시락 케이크<br/>
                    추가옵션: 하트초, 미니 보냉백<br/>
                    결제 가격: 12억<br/>
                    무통장입금: 신한 110-498-715570 이상혁
                <br/>
                </Text>
            </Container>
            <ButtonBox>
            <Button>카카오페이</Button>
            <Button>네이버페이</Button>
            </ButtonBox>
        </Box>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default detail3;