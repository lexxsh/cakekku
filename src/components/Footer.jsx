import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  bottom: ${props => (props.isHidden ? '-100px' : '0')};
  transition: bottom 0.3s ease-in-out;
  z-index: 2;
  box-shadow: 0 -5px 5px -5px #a6a6a6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  :active {
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  }
`;

const Footerbutton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-top: 5%;
  width: 20%;
  :active {
    box-shadow: none;
    background-color: green;
  }
`;

const Footertext = styled.div`
  font-size: 12px;
  width: 90px;
  text-decoration-color: #FF9494;
  text-align: center;
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
`;

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    setIsHidden(isScrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  const navigatetoMain = () => { navigate("/Main") };
  const navigatetoMake = () => { navigate("/MakeCake") };
  const navigatetoLike = () => { navigate("/MyLike") };
  const navigatetoReser = () => { navigate("/Reservation") };
  const navigatetoMyre = () => { navigate("/Myreview") };

  return (
    <>
      <Footerbox isHidden={isHidden}>
        <Line/>
        <ButtonBox>
          <Footerbutton onClick={navigatetoMain}>
            <GoHome color="pink" size="20px" />
            <Footertext>홈</Footertext>
          </Footerbutton>
          <Footerbutton onClick={navigatetoReser}>
            <BsCalendarHeart color="pink" size="20px" />
            <Footertext>예약확인</Footertext>
          </Footerbutton>
          <Footerbutton onClick={navigatetoMyre}>
            <PiNotePencil color="pink" size="20px" />
            <Footertext>이용후기</Footertext>
          </Footerbutton>
          <Footerbutton onClick={navigatetoMake}>
            <PiCakeFill color="pink" size="20px" />
            <Footertext>케이꾸</Footertext>
          </Footerbutton> 
          <Footerbutton onClick={navigatetoLike}>
            <AiOutlineHeart color="pink" size="20px" />
            <Footertext>관심목록</Footertext>
          </Footerbutton>
        </ButtonBox>
      </Footerbox>
    </>
  );
};

export default Footer;
