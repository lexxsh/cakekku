import React, { useState } from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import StarMarketbox from '../../components/Star/StarMaketbox';
import {BsPersonCircle} from "react-icons/bs";
import StoreReview from './StoreReview';
import { useEffect } from 'react';
import axios from 'axios';

const Reviewtext = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
  position: relative;
  top: 2rem;
  right : 4rem;
`;


const review = () =>{
  
    return (
        <>
        <Reviewtext>이 스토어의 리뷰 4건</Reviewtext>
        <StoreReview></StoreReview>
        <StoreReview></StoreReview>
        <StoreReview></StoreReview>
        <StoreReview></StoreReview>
        </>
    );
}

export default review