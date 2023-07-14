import React from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
const LogoImg = styled.img`
    background-color: none;
    width:200px;
    height:200px;
    position: relative;
    top:20%;
    animation: left-right 2s infinite ease-in-out alternate;
    @keyframes left-right{
        from{
             transform: rotate(-20deg);
        }
        to{
            transform: rotate(20deg);
        }
    }
`
const Loadtext = styled.p`
    font-size: 15px;
    text-align: center;
    animation: fadein 3s 2s ease-out forwards;
    position: relative;
    top:40%;
    @keyframes fadein {
        from{
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`

const Loading = () => {
    const navigate = useNavigate(); 
    const navigatetoMain = () => {
    navigate("/Main");
}
useEffect(() => {
    axios
      .get(`https://cakekku.shop/logintempuser/`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
    return (
        <>

        <Layout color = '#FFF5E4'>
        <LogoImg src='icon/Cakekku.png'></LogoImg>
        <Loadtext>케이꾸<br/>당신의 케이크를 직접꾸며보세요!</Loadtext>
        <Button 
            Buttonwidth ="40%"
            Buttonheight = "5%"
            Buttontop = "72%"
            ButtonColor="#FFE3E1"
            Buttonanimation ="fadeout 2s 3s ease-in forwards"
            Buttonopacity = "0"
            text="로그인하기"
            onClick={()=>alert("둘러보기를 눌러주세요~! 아직 구현중입니다ㅠㅠ")}>
            </Button>
        <Button
            Buttonwidth = "200px"
            Buttonheight = "40px"
            Buttontop = "80%"
            ButtonColor="transparent"
            Buttonanimation ="fadeout 2s 3s ease-in forwards"
            Buttonopacity = "0" 
            text="둘러보기"
            onClick={navigatetoMain}

            >
            </Button>
        </Layout>
        </>
    );
};

export default Loading;