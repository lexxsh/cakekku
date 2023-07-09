import React from 'react';
import Layout from '../components/Layout';
import Head2 from '../components/Heads/Head2';
import Footer from '../components/Footer';
import styled from 'styled-components';
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
    box-shadow: 0 17px 36px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.12);
`  
const ReserBox = styled.div`
    display: flex;
    flex-direction: row;
    border-width: 0px 0px 5px 0px ;
    border-style: solid;
    border-color: rgba(200, 200, 200, 0.80);
`
const ReserImg = styled.img`
    background-color: white;
    width: 120px;
    height: 120px;
    margin-right: 30px;
    margin-bottom: 20px;
`
const Reser1Box=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`
const ReserButton = styled.div`
    margin-left: 40px;
    margin-bottom: -10px;
    padding: 10px;
    background-color: #FFE3E1;
    border-radius: 30px;
    width: 70px;
`
const ReserTitle = styled.p`
    margin-bottom: -5px;
`
const ReserBody = styled.p`
    
`
const ReserDate = styled.p`
    margin: 0px;
    margin-left: 80px;
`
const Myreview = () => {
    return (
        <>
        <Layout color = '#FFF5E4'>
            <Head2></Head2>
            <Box>
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box>
                    <ReserButton>리뷰 쓰기</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box>
                    <ReserButton>리뷰 쓰기</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            <ReserBox>
                <ReserImg></ReserImg>
                <Reser1Box>
                    <ReserButton>리뷰 쓰기</ReserButton>
                    <ReserTitle>케이크니</ReserTitle>
                    <ReserBody>종류: 도시락 케이크 <br/>추가옵션: 상혁이랑 놀기
                    </ReserBody>
                    <ReserDate>2022-13-24</ReserDate>
                </Reser1Box>
            </ReserBox>
            </Box>
            <Footer></Footer>
        </Layout>
        </>
    );
};
export default Myreview;