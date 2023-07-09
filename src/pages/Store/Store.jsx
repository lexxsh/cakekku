import AppLayout from '../../components/Layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from './menu';
import Order from './order';
import Review from './review';
import Storetag from '../../components/Store.jsx/Storetag'
import Storedetail from '../../components/Store.jsx/Storedetail';
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';



const StoreImg = styled.img`
  background-color: none;
  width: 396px;
  height: 384px;
  flex-shrink: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const CButton = styled.div`
    width: 200px;
    height: 40px;
    background-color: #FFFF;
    color:black;
    border-bottom: ${props => props.isSelected ? "4px solid black" : "3px solid #bbbbbb"};
    display: flex; 
    align-items: center;
    justify-content: center; 
    margin: 0px 0px;  
`;

const Storename = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;
    display: flex;
    align-items: center;
`;

const Storeprice = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;
    display: flex;
    align-items: center;
    margin-right: 5px;
`;

const Address = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;
    display: flex;
    align-items: center;`

const StarContainer = styled.div`
    margin-left: 12px;
`;

const Container = styled.div`
    padding:20px;
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    box-shadow: 0px -7px 8px 0px rgba(176, 139, 255, 0.06);
`;

const BtnContainer = styled.div`
    height: 40px;
    background: #FFF;
    position: sticky;
    top:0px;
    justify-content: space-between;
    z-index: 1;
`;

const MenuButtonWrapper = styled.div`
    display: flex;
    background-color: #FFFF;
    position: sticky;
    justify-content: space-between;
`;


function Store() {
    const [a, seta] = useState('menu');
 
    return (
        <>
            <StoreImg src='icon/Store_ex.png' />
            <Container>
                <Storename>
                    케이크니 
                    <StarContainer>
                        <AiFillStar color="#FF9494" size="16px" />
                        <AiFillStar color="#FF9494" size="16px" />
                        <AiFillStar color="#FF9494" size="16px" />
                        <AiFillStar color="#FF9494" size="16px" />
                        <AiFillStar color="#747272" size="16px" />
                    </StarContainer>
                </Storename>
                <Storetag></Storetag>
                <Address>
                        인천 미추홀구 소성로 70 장미상가 상가동 1층 108호
                        </Address>
                <Storename>
                    <Storeprice>기본 </Storeprice>
                    16000 ~ 50000
                </Storename>

                <Storedetail></Storedetail>

                <BtnContainer>
                    <MenuButtonWrapper>
                        <CButton isSelected={a === "menu"} onClick={() => { seta("menu") }}>
                            메뉴
                        </CButton>
                        <CButton isSelected={a === "order"} onClick={() => { seta("order") }}>
                            주문양식
                        </CButton>    
                        <CButton isSelected={a === "review"} onClick={() => { seta("review") }}>
                            리뷰
                        </CButton>
                    </MenuButtonWrapper>
                </BtnContainer>
                {a === "menu" ? <Menu /> : a === "order" ? <Order /> : <Review />}
            </Container>
            </>
    );
}

export default Store;
