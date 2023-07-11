import React from 'react';
import Layout from '../components/Layout';
import Head2 from '../components/Heads/Head2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import { useNavigate } from 'react-router-dom';


const ReserBox = styled.div`
    display: flex;
    flex-direction: row;
    border-width: 0px 0px 5px 0px ;
    border-style: solid;
    border-color: rgba(200, 200, 200, 0.80);
    margin-top:25px
    
`
const ReserImg = styled.img`
    background-color: white;
    width: 120px;
    height: 120px;
    margin-right: 30px;
    margin-bottom: 20px;
    margin-left: 20px;
`
const Reser1Box=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`
const ReserButton = styled.div`
    //margin-left: 0px;
    //margin-bottom: -10px;
    padding: 8px;
    background-color: #FFE3E1;
    border-radius: 30px;
    width: 75px;
    height: 10px;
    flex-shrink: 0;
    color: #000;
text-align: center;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 10px;
letter-spacing: -0.5px;
`
const ReserTitle = styled.p`
    margin-bottom: -5px;
    color: #000;
//text-align: center;
font-family: Inter;
font-size: 11px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
`
const ReserBody = styled.p`
color: #747272;
font-family: Inter;
font-size: 8px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
    
`
const ReserDate = styled.p`
    margin: 0px;
    margin-left: 80px;
    color: #C8C8C8;
font-family: Inter;
font-size: 8px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
`
const Reservation = () => {
    const navigate = useNavigate(); 
    const navigatetoMain = () => {
  navigate("/Reservation/detail1");
}

const navigatetoMain2 = () => {
  navigate("/Reservation/detail2");
}

const navigatetoMain3 = () => {
  navigate("/Reservation/detail3");
}
  const navigatetoMain4 = () => {
  navigate("/Reservation/detail4");
}

    return (
        <>
        <Layout color = '#FFF5E4'>
            <Head2></Head2>
            <Wrapper Top="70px" Bottom="80px">
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box onClick={navigatetoMain}>
                    <ReserButton >예약 대기</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>

            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box onClick={navigatetoMain2}>
                    <ReserButton>상담 대기</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box onClick={navigatetoMain3}>
                    <ReserButton>결제 대기</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box onClick={navigatetoMain4}>
                    <ReserButton>주문 완료</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box onClick={navigatetoMain}>
                    <ReserButton>주문 완료</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>

            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box onClick={navigatetoMain}>
                    <ReserButton>주문 완료</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            
            </Wrapper>
            <Footer></Footer>
        </Layout>
        </>
    );
};

export default Reservation;