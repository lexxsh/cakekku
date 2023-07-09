import React from 'react';
import  styled  from 'styled-components';
import { GoHome } from "react-icons/go";
import { BsCalendarHeart } from "react-icons/bs";
import { PiCakeFill } from "react-icons/pi";
import { PiNotePencil } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Footerbox = styled.div`
  width: 100vw;
  height: 100px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 2;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const ButtonBox= styled.div`
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  :active{
        box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
    }
`
const Footerbutton = styled.button`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-top:5%;
    width: 20%;
    
`
const Footertext = styled.div`
  font-size: 12px;
  width: 90px;
  //padding: 0px 0px 0px 0px;
  text-decoration-color: #FF9494;
  text-align: center;
  //flex-direction: row;
  //justify-content: space-around;
  float: left;
  margin-top: 16%;
`;
const Line = styled.div`
    width: 88%;
    position: relative;
    top: -2%;
    height: 1px;
    background-color: #C8C8C8;
    margin: 0 auto;
`
const Footer = () => {

    return (
        
        <>
        
        <Footerbox>
            <Line/>
            <ButtonBox>
            <Footerbutton>
            <GoHome color="pink" size="20px" />
            <Footertext>홈</Footertext>
            </Footerbutton>
            <Footerbutton>
            <BsCalendarHeart color="pink" size="20px" />
            <Footertext>예약확인</Footertext>
            </Footerbutton>
            <Footerbutton>
            <PiNotePencil color="pink" size="20px" />
            <Footertext>이용후기</Footertext>
            </Footerbutton>
            <Footerbutton>
            <PiCakeFill color="pink" size="20px" />
            <Footertext>케이꾸</Footertext>
            </Footerbutton> 
            <Footerbutton>
            <AiOutlineHeart color="pink" size="20px" />
            <Footertext>관심목록</Footertext>
            </Footerbutton>
            </ButtonBox>
            </Footerbox></>
    );
};

export default Footer;