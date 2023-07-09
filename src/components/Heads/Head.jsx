import React from 'react';
import { styled } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const HeadBox = styled.div`
    width: 370px;
    height: 50px;
    background-color: none;
    position: absolute;
    top:1%;
    margin: 0 auto;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`
const HeadMain = styled.button`
    font-size: 30px;
    position: relative;
    left:8px;
    top:3px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;

`
const HeadButtons = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 10%;
`
const HeadButton = styled.div`
    
`
const Head = () => {
    const navigate= useNavigate();
    const onClickBtn = () => {
        navigate("/Loading"); // 로딩페이지 이동
      };
      const onClickBtn2 = () => {
        navigate("/Search"); // 검색페이지 이동
      };
      const onClickBtn3 = () => {
        navigate("/MyPage"); // 나의페이지 이동
      }
    return (
        <>
        <HeadBox>
            <HeadMain onClick={onClickBtn}>CakeKku</HeadMain>
            <HeadButton>
                 
                <HeadButtons onClick={onClickBtn3}><BsPerson color="black" size="30px" /></HeadButtons>
                <HeadButtons onClick={onClickBtn2}><FiSearch color="black" size="30px" /></HeadButtons>
            </HeadButton>
        </HeadBox>
        </>
    );
};

export default Head;