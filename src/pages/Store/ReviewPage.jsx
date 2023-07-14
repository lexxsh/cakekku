import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import StarMarketbox from '../../components/Star/StarMaketbox';
import {BsPersonCircle} from "react-icons/bs";
const Title = styled.p`
    font-size: 20px;
    position: absolute;
    top:10%;
    left:20%;
`
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top:30%;
`
const Name =styled.div`
    font-size: 15px;
`
const ReviewPage = () => {
    return (
        <>
        <Head2>
        </Head2>
        <Title>이 스토어의 리뷰 243건</Title>
        <Profile>
        <BsPersonCircle color="pink" size="50px"/>
        <Name>홍길동</Name>
        <StarMarketbox StarTop='-160%'
                        Starleft='100%'></StarMarketbox>
        </Profile>
        <Footer></Footer>
        </>
    );
};

export default ReviewPage;