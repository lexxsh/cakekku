import React, { useState } from "react";
import styled from "styled-components";
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
  background-color: #a6a6a6;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const LightGreyColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d9d9d9;
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
  background-color: red;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const RedColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff5757;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const RedColor3 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff66c4;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const RedColor4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cb6ce6;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const RedColor5 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8c52ff;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const RedColor6 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5e17eb;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const BlueColor1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #03989e;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const BlueColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #00c2cb;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const BlueColor3 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5ce1e6;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const BlueColor4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #38b6ff;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const BlueColor5 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5271ff;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const BlueColor6 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #004aad;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const GreenColor1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #008037;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const GreenColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7ed957;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const GreenColor3 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c9e265;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const GreenColor4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffde59;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const GreenColor5 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffbd59;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const GreenColor6 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff914d;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);
`;

const ColorButton = (props) => {
  const greyColor = () => {
    props.setColor("#545454");
  };

  const blackColor = () => {
    props.setColor("black");
  };

  const lightgreyColor = () => {
    props.setColor("#737373");
  };

  const lightgreyColor1 = () => {
    props.setColor("#a6a6a6");
  };

  const lightgreyColor2 = () => {
    props.setColor("#d9d9d9");
  };

  const whiteColor = () => {
    props.setColor("white");
  };

  const redColor1 = () => {
    props.setColor("red");
  };

  const redColor2 = () => {
    props.setColor("#ff5757");
  };

  const redColor3 = () => {
    props.setColor("#ff66c4");
  };

  const redColor4 = () => {
    props.setColor("#cb6ce6");
  };

  const redColor5 = () => {
    props.setColor("#8c52ff");
  };

  const redColor6 = () => {
    props.setColor("#5e17eb");
  };

  const blueColor1 = () => {
    props.setColor("#03989e");
  };

  const blueColor2 = () => {
    props.setColor("#00c2cb");
  };

  const blueColor3 = () => {
    props.setColor("#5ce1e6");
  };

  const blueColor4 = () => {
    props.setColor("#38b6ff");
  };

  const blueColor5 = () => {
    props.setColor("#5271ff");
  };

  const blueColor6 = () => {
    props.setColor("#004aad");
  };

  const greenColor1 = () => {
    props.setColor("#008037");
  };

  const greenColor2 = () => {
    props.setColor("#7ed957");
  };

  const greenColor3 = () => {
    props.setColor("#c9e265");
  };

  const greenColor4 = () => {
    props.setColor("#ffde59");
  };

  const greenColor5 = () => {
    props.setColor("#ffbd59");
  };

  const greenColor6 = () => {
    props.setColor("#ff914d");
  };


  return (
    <>
      <ColorBox>
        <BlackColor onClick={blackColor}></BlackColor>
        <GreyColor onClick={greyColor}></GreyColor>
        <LightGreyColor onClick={lightgreyColor}></LightGreyColor>
        <LightGreyColor1 onClick={lightgreyColor1}></LightGreyColor1>
        <LightGreyColor2 onClick={lightgreyColor2}></LightGreyColor2>
        <WhiteColor1 onClick={whiteColor}></WhiteColor1>
      </ColorBox>
      <ColorBox>
        <RedColor1 onClick={redColor1}></RedColor1>
        <RedColor2 onClick={redColor2}></RedColor2>
        <RedColor3 onClick={redColor3}></RedColor3>
        <RedColor4 onClick={redColor4}></RedColor4>
        <RedColor5 onClick={redColor5}></RedColor5>
        <RedColor6 onClick={redColor6}></RedColor6>
      </ColorBox>
      <ColorBox>
        <BlueColor1 onClick={blueColor1}></BlueColor1>
        <BlueColor2 onClick={blueColor2}></BlueColor2>
        <BlueColor3 onClick={blueColor3}></BlueColor3>
        <BlueColor4 onClick={blueColor4}></BlueColor4>
        <BlueColor5 onClick={blueColor5}></BlueColor5>
        <BlueColor6 onClick={blueColor6}></BlueColor6>
      </ColorBox>
      <ColorBox>
        <GreenColor1 onClick={greenColor1}></GreenColor1>
        <GreenColor2 onClick={greenColor2}></GreenColor2>
        <GreenColor3 onClick={greenColor3}></GreenColor3>
        <GreenColor4 onClick={greenColor4}></GreenColor4>
        <GreenColor5 onClick={greenColor5}></GreenColor5>
        <GreenColor6 onClick={greenColor6}></GreenColor6>
      </ColorBox>
    </>
  );
};

export default ColorButton;