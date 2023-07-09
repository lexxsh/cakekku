import React from 'react';
import { styled } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const HeadBox = styled.div`
    width: 370px;
    height: 50px;
    background-color: none;
    position: absolute;
    top:2%;
    margin: 0 auto;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`
const HeadMain = styled.h1`
    font-size: 26px;
    position: relative;
    left:-18%;
    display: flex;
    align-items: center;

`
const HeadButtons = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 10%;
`
const BackButton = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 2%;
`
const HeadButton = styled.div`
    
`
const LogoImg = styled.img`
    background-color: none;
    width:95px;
    height:95px;
    margin-top: -3%;
    margin-left: -15%;
`
const Head2 = () => {
    const navigate= useNavigate();
    const onClickBtn = () => {
        navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
      };
      const onClickBtn2 = () => {
        navigate("/Search"); // 검색페이지 이동
      }
      const onClickBtn3 = () => {
        navigate("/MyPage"); // 검색페이지 이동
      }
    return (
        <>
        <HeadBox>
            <BackButton onClick={onClickBtn}><BiArrowBack color="black" size="30px" /></BackButton>
            <LogoImg src='icon/Cakekku.png'></LogoImg>
            <HeadMain>CakeKku</HeadMain>
            <HeadButton>
                <HeadButtons onClick={onClickBtn3}><BsPerson color="black" size="30px" /></HeadButtons>
                <HeadButtons onClick={onClickBtn2}><FiSearch color="black" size="30px" /></HeadButtons>
            </HeadButton>
        </HeadBox>
        </>
    );
};

export default Head2;