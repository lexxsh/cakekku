import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Ordertext = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const Ordertext2 = styled.p`
  color: #FF9494;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const OrderContainer = styled.div`
  background-color: #FFE9E9;
  padding: 20px;
  width: 262px;
  flex-shrink: 0;
  border-radius: 24px;
  margin: 0 auto;
`;

function Order() {
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
  return (
    <>
      <Ordertext>
        <br /><br />
        {infor.store_order_form_content1}
      <br /><br />
      </Ordertext>

      <OrderContainer>
        <Ordertext2>
          미니 ~ 3호 <br />
          주문 양식<br />
          <br />
        </Ordertext2>
        <Ordertext>
        {infor.store_order_form_content2}
        </Ordertext>
      </OrderContainer>

      <Ordertext>
        <br />
        <br />
        <br />
      </Ordertext>

      <OrderContainer>
        <Ordertext2>
          도시락 케이크 <br/>
          주문 양식<br/>
          <br/>
        </Ordertext2>
        <Ordertext>
          1. 케이크 크기 / 모양 선택  : 
          <br/>
          {infor.store_order_form_content3}
          <br/>
        </Ordertext>
      </OrderContainer>
    </>
  );
}

export default Order;
