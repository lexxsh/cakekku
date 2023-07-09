import React from 'react';
import styled from 'styled-components';

const Menutext = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
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

function Menu() {
  return (
    <>
      <Menutext>
        <br /><br />
        외부 : 100% 필라델피아 크림치즈<br />
        - 바탕색 1가지, 상단 레터링 기본<br />
        (그 외 디자인에 따라 추가요금 발생)<br />
        <br />
      </Menutext>

      <Menutext2>
        케이크 사이즈 선택<br />
      </Menutext2>
      <Menutext>
        1. 도시락 (10cm/1인분 15000원부터)<br />
        2. 미니 (12cm/2인분/30000원부터)<br />
        3. 1호 (16cm/3-4인분/40000원부터)<br />
        4. 2호 (19cm/4-6인분/52000원부터)<br />
        5. 3호 (21cm/6-8인분/62000원부터)<br />
        - 하트는 1호만 가능 +2000원<br />
        - 2단케이크는 문의주세요<br />
        <br />
      </Menutext>

      <Menutext2>
        빵 + 샌딩 선택<br />
      </Menutext2>
      <Menutext>
        1. 바닐라빵 + 기본생크림 = 0원<br />
        2. 초코빵 + 초코생크림 = 2000원 <br />
        (크런키 추가+1000)<br />
        3. 바닐라빵 + 루토스크림(커피쿠키) = 2000원<br />
        4. 초코빵 + 오레오크림 = 3000원<br />
        5. 바닐라빵 + 라즈베리크림 = 3000원<br />
        <br />
      </Menutext>
      <Menutext2>
        고정디자인<br />
      </Menutext2>
      <Menutext>1. 데이지 꽃 - 15000원</Menutext>
      <MenuImg src='icon/Store_ex.png'></MenuImg>
      <Menutext><br/>2.무지개 레터링 -16000원</Menutext>
      <MenuImg src='icon/Store_ex.png'></MenuImg>
      <Menutext><br/>3.촛불폼폼이 -17000원</Menutext>
      <MenuImg src='icon/Store_ex.png'></MenuImg>
      <Menutext><br/>4.스마일데이지 -16000원</Menutext>
      <MenuImg src='icon/Store_ex.png'></MenuImg>
    </>
  );
}

export default Menu;