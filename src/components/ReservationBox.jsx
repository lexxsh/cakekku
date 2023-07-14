import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const ReserBox = styled.div`
  display: flex;
  flex-direction: row;
  border-width: 0px 0px 5px 0px;
  border-style: solid;
  border-color: rgba(200, 200, 200, 0.80);
  margin-top: 25px;
`;

const ReserImg = styled.img`
  background-color: white;
  width: 120px;
  height: 120px;
  margin-right: 30px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Reser1Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const ReserButton = styled.div`
  padding: 8px;
  background-color: #FFE3E1;
  border-radius: 30px;
  width: 75px;
  height: 10px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px;
  letter-spacing: -0.5px;
`;

const ReserTitle = styled.p`
  margin-bottom: -5px;
  color: #000;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ReserBody = styled.p`
  color: #747272;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ReserDate = styled.p`
  margin: 0px;
  margin-left: 80px;
  color: #C8C8C8;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ReservationBox = (props) => {
  const navigate = useNavigate();
  const { onClick, index } = props;
  const handleClick = () => {
    navigate(onClick);
    
  };
  const [infor, setInfor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/myorderlist/`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const marketData = infor[index]; 
  console.log(index);
  return (
    <ReserBox>
      <ReserImg></ReserImg>
      <Reser1Box onClick={handleClick}>
      <ReserButton status={marketData.order_stage}>
        {marketData.order_stage === 0 && '예약 대기'}
        {marketData.order_stage === 1 && '예약 상담'}
        {marketData.order_stage === 2 && '결제 대기'}
        {marketData.order_stage === 3 && '결제 완료'}
      </ReserButton>
        <ReserTitle>케이크니</ReserTitle>
        <ReserBody>
          종류: 도시락 케이크
          <br/>
          추가옵션: 상혁이랑 놀기
        </ReserBody>
        <ReserDate>2022-13-24</ReserDate>
      </Reser1Box>
    </ReserBox>
  );
};

export default ReservationBox;
