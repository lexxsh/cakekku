import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import StarMarketbox from '../../components/Star/StarMaketbox';
import {BsPersonCircle} from "react-icons/bs";
const Menutext = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
  position: relative;
  left: -20%;
`;

const Menutext2 = styled.p`
  color: #FF9494;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;
const MenuImg = styled.img`
  background-color: none;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;

const Name =styled.div`
    font-size: 15px;
`
function Review(){
    return (
        <>
        <Head2>
        </Head2>
        <Menutext>이 스토어의 리뷰 243건</Menutext>
        <Menutext2>
        <BsPersonCircle color="pink" size="50px"/>
        <Name>홍길동</Name>
        <StarMarketbox StarTop='-160%'
                        Starleft='100%'></StarMarketbox>
        </Menutext2>
        <MenuImg></MenuImg>
        <Footer></Footer>
        </>
    );
}

export default Review