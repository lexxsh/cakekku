import React from 'react';
import styled from 'styled-components'

const FirstBox = styled.div`
    height: 140px;
    width:  350px;
    opacity: 90%;
    background-color: #ffffff;
    position: absolute;
    //left: 4%;
    top:${(props) => (props.Firsttop ? props.Firsttop : "30%")};
    border-radius: 30px;
    margin: 0 auto;
    filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
`
const ImgBox = styled.div`
    height: 140px;
    width:  140px;
    border-radius: 30px;
    background-color: skyblue;
    
`
const Marketname = styled.p`
    margin: 0;
    position: absolute;
    left:53%;
    top:6%;
    color: #FF9494;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
`
const Marketaddres = styled.p`
    margin: 0;
    position: absolute;
    left:53%;
    top:22%;
    color: #747272;
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.5px;
`
const Markethaseta=styled.p`
    font-size: 12px;
    margin: 0;
    position: absolute;
    left:53%;
    top:55%;
    border: 1px solid;
    border-radius: 20px;
    padding: 2px;
`
const HashBox = styled.div`
  display: inline-flex;
  align-items: center;
  background: #FFE3E1;
  border-radius: 10px;
  padding: 0 8px;
  margin-right: 8px;
  flex-shrink: 0;
  height: 21.847px;
  padding: 2px;
  margin: 0;
    position: absolute;
    left:75%;
    top:40%;
`;

const HashBox2 = styled.div`
  display: inline-flex;
  align-items: center;
  background: #FFE3E1;
  border-radius: 10px;
  margin-right: 8px;
  flex-shrink: 0;
  height: 21.847px;
  padding: 2px;
  margin-right:15px;
    position: absolute;
    left:53%;
    top:40%;
`;

const Hashtag = styled.p`
  color: #747272;
  text-align: center;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const MarketPrice = styled.p`
    color: #000;
text-align: center;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
    margin: 0;
    position: absolute;
    left:53%;
    top:70%;
`
const MarketBox = (props) => {
    return (
        <>
        <FirstBox Firsttop = {props.Firsttop}>
            <ImgBox>
            <Marketname>메리고라운드</Marketname>
            <Marketaddres>인천 남동구 문화서로28번길 22</Marketaddres>
            <HashBox>
                <Hashtag>입체케이크</Hashtag>
            </HashBox>
            <HashBox2>
                <Hashtag>캐릭터케이크</Hashtag>
            </HashBox2>
            </ImgBox>
            <MarketPrice>기본 16000 ~ 30000</MarketPrice>

        </FirstBox>
        </>
    );
};

export default MarketBox;