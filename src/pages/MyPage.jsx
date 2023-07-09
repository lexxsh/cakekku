import React from 'react';
import Layout from '../components/Layout';
import Head2 from '../components/Heads/Head2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import {BsPersonCircle} from "react-icons/bs";
import {PiTicketFill} from "react-icons/pi"
import {RiParkingBoxFill} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"
import {BsCreditCard2Back} from "react-icons/bs"
const Box = styled.div`
        width: 350px;
    height: 700px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    position: relative;
    top:9%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 17px 36px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.12);
`  
const MyBox = styled.div`
    display: flex;
    flex-direction: row;
    border-width: 0px 0px 2px 0px ;
    border-style: solid;
    border-color: rgba(200, 200, 200, 0.80);
`
const MyBox1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-bottom: 40px;
`

const Mytext = styled.p`
    font-size: 15px;
`
const Myemail = styled.p`
    font-size: 10px;
    margin-top:-10px;
`
const MyBox2 = styled.div`
    display: flex;
    flex-direction: row;
    border-width: 0px 0px 2px 0px ;
    border-style: solid;
    border-color: rgba(200, 200, 200, 0.80);
`
const Boxicon = styled.div`
    display: flex;
    flex-direction: row;
`
const Boxicons = styled.div`
    margin-left:30px;
`
const BoxLink = styled.div`
    
`
const MyPage = () => {
    return (
        <>
        <Layout color="#FFF5E4">
        <Head2></Head2>
        <Box>
            <MyBox>
                <BsPersonCircle color="pink" size="70px" />
                <MyBox1>
                    <Mytext>장유선님 안녕하세요!</Mytext>
                    <Myemail>john8538@naver.com</Myemail>
                </MyBox1>
            </MyBox>
            <MyBox2>
                <Boxicon>
                    <Boxicons><PiTicketFill color="pink" size="50px"/></Boxicons>
                    <Boxicons><RiParkingBoxFill color="pink" size="50px"/></Boxicons>
                    <Boxicons><AiOutlineMessage color="pink" size="50px"/></Boxicons>
                    <Boxicons><BsCreditCard2Back color="pink" size="50px"/></Boxicons>
                </Boxicon>
            </MyBox2>
            <BoxLink>최근 본 스토어</BoxLink>
            <BoxLink>FAQ</BoxLink>
            <BoxLink>공지사항</BoxLink>
            <BoxLink>문의하기</BoxLink>
            <BoxLink>설정</BoxLink>
            <BoxLink>실험실</BoxLink>
        </Box>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default MyPage;