import React from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <Ordertext>
        <br /><br />
        * 주문서,도안,사진 첨부해주셔야 상담가능합니다.<br />
        * 원하시는내용 모두 주문서에 작성해주세요.
      <br /><br />
      </Ordertext>

      <OrderContainer>
        <Ordertext2>
          미니 ~ 3호 <br />
          주문 양식<br />
          <br />
        </Ordertext2>
        <Ordertext>
          1. 케이크 크기 / 모양 선택 : <br />
          2. 시트 + 샌딩(케이크 안 크림) 선택 : <br />
          3. 케이크 배경 색상 : <br />
          4. 케이크 상단 문구 : <br />
          5. 케이크 하단 판 문구 (생략 시 빈칸) : <br />
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
          2. 시트 + 샌딩(케이크 안 크림) 선택 :<br/>
          1)바닐라+생크림 = +0원<br/>
          2)초코+초코생크림 = +1000원<br/>
          두가지 중에서만 선택가능<br/>
          <br/>
          3. 케이크 배경 색상 : <br/>
          (샘플과 동일한 색상일 시 빈칸)<br/>

          4. 케이크 상단 문구 : 
          <br/>
        </Ordertext>
      </OrderContainer>
    </>
  );
}

export default Order;
