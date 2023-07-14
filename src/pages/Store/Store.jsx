import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Head from '../../components/Heads/Head2';
import Storetag from '../../components/Store.jsx/Storetag';
import Storedetail from '../../components/Store.jsx/Storedetail';
import Menu from './menu';
import Order from './order';
import Review from './review';
import Footer from '../../components/Footer';

const StoreImg = styled.img`
  background-color: none;
  width: 396px;
  height: 384px;
  flex-shrink: 0;
  position: relative;
  left: 50%;
  margin-top: 60px;
  transform: translateX(-50%);
`;

const CButton = styled.div`
  width: 200px;
  height: 40px;
  background-color: #FFFF;
  color: black;
  border-bottom: ${props => props.isSelected ? "4px solid black" : "3px solid #bbbbbb"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 0px;
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
  align-items: center;
`;

const StarContainer = styled.div`
  margin-left: 12px;
`;

const Container = styled.div`
  padding: 20px;
  border-radius: 24px 24px 0px 0px;
  background: #FFF;
  box-shadow: 0px -7px 8px 0px rgba(176, 139, 255, 0.06);
`;

const BtnContainer = styled.div`
  height: 40px;
  background: #FFF;
  position: sticky;
  top: 0px;
  justify-content: space-between;
  z-index: 1;
`;

const MenuButtonWrapper = styled.div`
  display: flex;
  background-color: #FFFF;
  position: sticky;
  justify-content: space-between;
`;

const Store = () => {
  const [a, seta] = useState('menu');
  const { store_id } = useParams();
  const [infor, setInfor] = useState([]);
  useEffect(() => {
    axios
      .get(`https://cakekku.shop/marketdetail/${store_id}/`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  
  const updateScroll = () => {
    const currentPosition = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  
    if (currentPosition > scrollPosition) {
      setIsFooterVisible(false); // 스크롤을 내릴 때 푸터 숨김
    } else {
      setIsFooterVisible(true); // 스크롤을 올릴 때 푸터 보임
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);
  

  return (
    <>
      <Head />
      <StoreImg src={infor.store_thumbnail_image} />
      <Container>
        <Storename>
          {infor.store_name}
          <StarContainer>
            <AiFillStar color="#FF9494" size="16px" />
            <AiFillStar color="#FF9494" size="16px" />
            <AiFillStar color="#FF9494" size="16px" />
            <AiFillStar color="#FF9494" size="16px" />
            <AiFillStar color="#747272" size="16px" />
          </StarContainer>
        </Storename>
        <Storetag />
        <Address>{infor.store_address}</Address>
        <Storename>
          <Storeprice>기본 </Storeprice>
          {infor.store_lower_price} ~ {infor.store_higher_price}
        </Storename>

        <Storedetail />

        <BtnContainer>
          <MenuButtonWrapper>
            <CButton isSelected={a === 'menu'} onClick={() => { seta('menu') }}>
              메뉴
            </CButton>
            <CButton isSelected={a === 'order'} onClick={() => { seta('order') }}>
              주문양식
            </CButton>
            <CButton isSelected={a === 'review'} onClick={() => { seta('review') }}>
              리뷰
            </CButton>
          </MenuButtonWrapper>
        </BtnContainer>
        {a === 'menu' ? <Menu /> : a === 'order' ? <Order /> : <Review />}
      </Container>
      <Footer isHidden={!isFooterVisible} />
    </>
  );
};

export default Store;
