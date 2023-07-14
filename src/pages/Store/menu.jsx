import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
  const { store_id } = useParams();
  const [infor, setInfor] = useState([]);
  const [cake, setCake] = useState([]);

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

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/marketcakelist/?store_id=${store_id}`)
      .then((res) => {
        console.log(res);
        setCake(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Menutext>
        <br /><br />
        {infor.store_menu_content1}
        <br />
      </Menutext>

      <Menutext2>
        케이크 사이즈 선택<br />
      </Menutext2>
      <Menutext>
        {infor.store_menu_content2}
        <br />
      </Menutext>

      <Menutext2>
        빵 + 샌딩 선택<br />
      </Menutext2>
      <Menutext>
        {infor.store_menu_content3}
        <br />
      </Menutext>
      <Menutext2>
        고정디자인<br />
      </Menutext2>

      {cake.map((cakeItem) => (
        <React.Fragment key={cakeItem.cake_id}>
          <Menutext>{cakeItem.cake_id}. {cakeItem.cake_name} - {cakeItem.cake_price}원</Menutext>
          <MenuImg src={`https://cakekku.shop${cakeItem.cake_image}`} />
        </React.Fragment>
      ))}
    </>
  );
}

export default Menu;