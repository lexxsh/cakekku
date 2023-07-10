import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import {BiLoader} from "react-icons/bi";

const ResTtitle = styled.p`
color: #FF9494;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
`

const ResTtitle2 = styled.p`
color: #747272;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
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

const TextBox = styled.div`
    width: 266px;
    flex-shrink: 0;
    flex-shrink: 0;
    border-radius: 24px;
    margin: 0 auto;
    stroke-width: 1px;
    stroke: #8F8F8F;
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
const review1 = () => {
    return (
        <><Layout color="white">
        <Head2></Head2>
        <Box>
            <ResTtitle>케이크니<ResTtitle2>의 케이크 어땠나요?</ResTtitle2></ResTtitle>
            <Lineboxtext>
                <LineText>대기</LineText>
                <LineText>상담</LineText>
                <LineText>결제</LineText>
                <LineText>완료</LineText>
            </Lineboxtext>  
            <MainCircle>
            <BiLoader size="150px" color="#FF9494"></BiLoader>
                </MainCircle> 

            <Container>
                <Text>
                    <br/>
                주문하신 케이크정보에 대해서 검토중입니다.<br/>
                이 작업은 최소 5분에서 최대 1시간가량 소요됩니다.<br/>
                <br/>
                판매자가 검토 후 상담 화면으로 변경 됩니다.<br/>
                <br/>
                만약 1시간이 지난 후에도 이 화면이 유지된다면<br/>
                아래의 전화번호로 문의해주세요!<br/>
                <br/>
                </Text>
            </Container>
            
        </Box>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default review1;