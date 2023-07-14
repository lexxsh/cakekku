import React from 'react';
import { useState,  useEffect} from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review1 from './review1.jpg';
import review2 from './review2.jpg';
import review3 from './review3.jpg';
import review4 from './review4.jpg';
import review5 from './review5.jpg';
import axios from 'axios';

const FirstBox = styled.div`
  opacity: 90%;
  background-color: #FFF5E4;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.div`
  height: 240px;
  width: 250px;
  border-radius: 30px;
  margin-top: 0rem;
  background-color: #ffd0e9;

`;

const ReviewDate = styled.div`
  color: #747272;
  margin-left: 10rem;
  text-align: left;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  z-index: 1;
`;

const ReviewContents = styled.div`
  margin-top: 0rem;
  margin: 0.5rem;
  color: #747272;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
  z-index: 1;
`;

const HashBoxContainer = styled.div`
  display: flex;
  margin: 1rem;
  margin-top: 0rem;
  margin-left: 1.5rem;
`;

const HashBox = styled.div`
  display: flex;
  align-items: center;
  background: #FFE3E1;
  border-radius: 10px;
  padding: 0 8px;
  margin-right: 8px;
  flex-shrink: 0;
  height: 21.847px;
`;

const HashBox2 = styled(HashBox)`
  margin-left: 8px;
`;

const Hashtag = styled.p`
  color: #747272;
  text-align: center;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
  border-radius: 30px;
`;

function StoreReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    axios
    .get(`https://cakekku.shop/marketreviewlist/?store_id=1`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
    },[]);


  return (
    <>
      <FirstBox>
        <ReviewDate>2023-07-13</ReviewDate>
        <ImgBox>
          <Slider {...settings}>
            <div>
              <SlideImage src={review1} alt="Review 1" />
            </div>
            <div>
              <SlideImage src={review2} alt="Review 2" />
            </div>
            <div>
              <SlideImage src={review3} alt="Review 3" />
            </div>
            <div>
              <SlideImage src={review4} alt="Review 4" />
            </div>
            <div>
              <SlideImage src={review5} alt="Review 5" />
            </div>
          </Slider>
        </ImgBox>
        <ReviewContents>사장님 친절하시고 맛있어요 상담도 잘해주세요</ReviewContents>
        <HashBoxContainer>
          <HashBox>
            <Hashtag>#맛있어요</Hashtag>
          </HashBox>
          <HashBox2>
            <Hashtag>#신선해요</Hashtag>
          </HashBox2>
        </HashBoxContainer>
      </FirstBox>
    </>
  );
}

export default StoreReview;