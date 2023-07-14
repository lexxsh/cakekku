import React, { useState } from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import img from '../../Store_ex.png';
import Starreview from '../../components/Star/StarReivew';
import Button from '../../components/Button';
import Review2 from './review2';
import { useNavigate } from 'react-router-dom';

const ResTtitle = styled.p`
  color: #747272;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin: 0px;
  margin-top: 100px;
`;

const StoreImg = styled.img`
  background-color: none;
  width: 351.193px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  position: relative;
  margin: 20px auto;
  left: 10.5rem;
  transform: translateX(-50%);
`;

const TextWrapper = styled.span`
  color: #FF9494;
`;

const Review1 = () => {
  const navigate = useNavigate(); 
  const navigatetoMain = () => {
  navigate("/Myreview/review2");
}
  return (
    <>
        <Layout color="white">
          <Head2 />
          <ResTtitle>
            <TextWrapper>케이크니</TextWrapper>의 케이크 어땠나요?
          </ResTtitle>
          <StoreImg src={img} />
          <Starreview></Starreview>
          <Button
            Buttonwidth="328px"
            Buttonheight="40px"
            ButtonColor="#FF9494"
            Buttontop="43rem"
            text="다음"
            fontsize="25px"
            onClick={navigatetoMain}
          />
          <Footer />
        </Layout>
    </>
  );
};

export default Review1;
