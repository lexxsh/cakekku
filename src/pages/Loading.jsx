import React from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components'
const LogoImg = styled.img`
    background-color: none;
    width:300px;
    height:300px;
    position: absolute;
    left:22%;
    top:32%;
    transform: translate(-50%,-50%);
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
    font-size: 10px;
    position: absolute;
    left:50%;
    top:80%;
    transform: translate(-50%,-50%);
    text-align: center;
    animation: fadein 3s 2s ease-out forwards;
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
    return (
        <>

        <Layout MainColor = '#FFF5E4'></Layout>
        <LogoImg src='icon/Cakekku.png'></LogoImg>
        <Loadtext>케이꾸<br/>당신의 케이크를 직접꾸며보세요!</Loadtext>
        <Button 
            Buttonwidth = "200px"
            Buttonheight = "40px"
            Buttontop = "82%"
            ButtonColor="#FFE3E1"
            Buttonanimation ="fadeout 2s 3s ease-in forwards"
            Buttonopacity = "0"
            text="로그인하기">
            </Button>
        <Button
            Buttonwidth = "200px"
            Buttonheight = "40px"
            Buttontop = "90%"
            ButtonColor="transparent"
            Buttonanimation ="fadeout 2s 3s ease-in forwards"
            Buttonopacity = "0" 
            text="둘러보기"
            onClick={()=>navigate("/Main")}>
            </Button>
        </>
    );
};

export default Loading;