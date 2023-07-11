import React, { Component } from "react";
import Head2 from "../../components/Heads/Head2";
import Footer from "../../components/Footer";
import { useState } from "react";
import { styled } from "styled-components";
import { IoMdColorPalette } from "react-icons/io";
const Title = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20%;
`;
const MenuBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  background-color: #fff5e4;
  margin-top: 10%;
`;
const ColorBox = styled.div`
  width: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
margin: 0 auto;
justify-content: space-between;
margin-top: 5%;
flex-wrap: wrap;
`;
const BlackColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
    
`;
const GreyColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #545454;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const LightGreyColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #737373;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const LightGreyColor1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #A6A6A6;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const LightGreyColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #D9D9D9;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const WhiteColor1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const RedColor1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: RED;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const RedColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FF5757;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;
const RedColor3 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FF66C4;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const RedColor4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #CB6CE6;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;


const ColorButton = () => {
  const [color, setColor] = useState("#000");
  const greyColor = (color) => {
    setColor("#545454");
  };
  const blackColor = (color) => {
    setColor("black");
  };
  const lightgreyColor = (color) => {
    setColor("#737373");
  };
  const lightgreyColor1 = (color) => {
    setColor("#A6A6A6");
  };
  const lightgreyColor2 = (color) => {
    setColor("#D9D9D9");
  };
  const WhiteColor = (color) => {
    setColor("white");
  };
  const RedColor = (color) => {
    setColor("Red");
  };
  const redColor1 = (color) => {
    setColor("#FF5757");
  };
  const redColor2 = (color) => {
    setColor("#FF66C4");
  }

  const redColor3 = (color) => {
    setColor("#CB6CE6");
  }
  const Cake = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 10%;
    background-color: ${color};
    border: 1px solid;
    border-color: #D9D9D9;
  `;

  return (
    <>
      <Head2></Head2>

      <Title>나만의 케이크 만들기</Title>
      <Cake></Cake>
      <MenuBox>
        <IoMdColorPalette color="#495340" size="40px" />
      </MenuBox>
      <ColorBox>
        <BlackColor onClick={blackColor}></BlackColor>
        <GreyColor onClick={greyColor}></GreyColor>
        <LightGreyColor onClick={lightgreyColor}></LightGreyColor>
        <LightGreyColor1 onClick={lightgreyColor1}></LightGreyColor1>
        <LightGreyColor2 onClick={lightgreyColor2}></LightGreyColor2>
        <WhiteColor1 onClick={WhiteColor}></WhiteColor1>
      </ColorBox>
      <ColorBox>
         <RedColor1 onClick={RedColor}></RedColor1>
         <RedColor2 onClick={redColor1}></RedColor2>
         <RedColor3 onClick={redColor2}></RedColor3>
         <RedColor4 onClick={redColor3}></RedColor4>
      </ColorBox>
      <Footer></Footer>
    </>
  );
};

export default ColorButton;
