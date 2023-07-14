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

const RedColor5 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8C52FF;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const RedColor6 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5E17EB;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const BlueColor1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #03989E;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const BlueColor2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #00C2CB;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const BlueColor3 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5CE1E6;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const BlueColor4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #38B6FF;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const BlueColor5 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5271FF;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const BlueColor6 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #004AAD;
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
  background-color: #7ED957;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const GreenColor3 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #C9E265;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const GreenColor4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFDE59;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const GreenColor5 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFBD59;
  box-shadow: 0px 7px 21px 1px rgba(0, 0, 0, 0.25);

`;

const GreenColor6 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FF914D;
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

  const redColor4 = (color) => {
    setColor("#8C52FF");
  }

  const redColor5 = (color) => {
    setColor("#5E17EB");
  }

  const bluecolor1 = (color) => {
    setColor("#03989E");
  }

  const bluecolor2 = (color) => {
    setColor("#00C2CB");
  }

  const bluecolor3 = (color) => {
    setColor("#5CE1E6");
  }

  const bluecolor4 = (color) => {
    setColor("#38B6FF");
  }

  const bluecolor5 = (color) => {
    setColor("#5271FF");
  }
  const bluecolor6 = (color) => {
    setColor("#004AAD");
  }

  const greencolor1 = (color) => {
    setColor("#008037");
  }

  const greencolor2 = (color) => {
    setColor("#7ED957");
  }

  const greencolor3 = (color) => {
    setColor("#C9E265");
  }

  const greencolor4 = (color) => {
    setColor("#FFDE59");
  }

  const greencolor5 = (color) => {
    setColor("#FFBD59");
  }
  const greencolor6 = (color) => {
    setColor("#FF914D");
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
         <RedColor5 onClick={redColor4}></RedColor5>
         <RedColor6 onClick={redColor5}></RedColor6>
      </ColorBox>
      <ColorBox>
         <BlueColor1 onClick={bluecolor1}></BlueColor1>
         <BlueColor2 onClick={bluecolor2}></BlueColor2>
         <BlueColor3 onClick={bluecolor3}></BlueColor3>
         <BlueColor4 onClick={bluecolor4}></BlueColor4>
         <BlueColor5 onClick={bluecolor5}></BlueColor5>
         <BlueColor6 onClick={bluecolor6}></BlueColor6>
      </ColorBox>
      <ColorBox>
         <GreenColor1 onClick={greencolor1}></GreenColor1>
         <GreenColor2 onClick={greencolor2}></GreenColor2>
         <GreenColor3 onClick={greencolor3}></GreenColor3>
         <GreenColor4 onClick={greencolor4}></GreenColor4>
         <GreenColor5 onClick={greencolor5}></GreenColor5>
         <GreenColor6 onClick={greencolor6}></GreenColor6>
      </ColorBox>
      <Footer></Footer>
    </>
  );
};

export default ColorButton;
