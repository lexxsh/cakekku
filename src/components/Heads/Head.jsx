import React from 'react';
import { styled } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
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
const HeadMain = styled.h1`
    font-size: 30px;
    position: relative;
    left:10px;
    display: flex;
    align-items: center;

`
const HeadButtons = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 10%;
`
const HeadButton = styled.div`
    
`
const Head = () => {
    return (
        <>
        <HeadBox>
            <HeadMain>CakeKku</HeadMain>
            <HeadButton>
                <HeadButtons><BsPerson color="black" size="30px" /></HeadButtons>
                <HeadButtons><FiSearch color="black" size="30px" /></HeadButtons>
            </HeadButton>
        </HeadBox>
        </>
    );
};

export default Head;