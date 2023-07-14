import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

function StoreReview({ index }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { store_id } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/marketreviewlist/?store_id=${store_id}`)
      .then((res) => {
        console.log(res.data[0]);
        setReviewList(res.data);
        setImgArr([
          `https://cakekku.shop${res.data[index].review_image1}`,
          `https://cakekku.shop${res.data[index].review_image2}`,
          `https://cakekku.shop${res.data[index].review_image3}`,
          `https://cakekku.shop${res.data[index].review_image4}`,
          `https://cakekku.shop${res.data[index].review_image5}`
        ]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [index, store_id]);

console.log(imgArr)
console.log(reviewList)
  return (
    <>
      <FirstBox>
        <ReviewDate>{reviewList.length != 0 && reviewList[index].created_at}</ReviewDate>
        <ImgBox>
          <Slider {...settings}>
            {imgArr.filter((element) => element !== "https://cakekku.shopnull").map((eachImg, idx) => (
              <div key={idx}>
                <SlideImage src={eachImg} alt={`Review ${idx + 1}`} />
              </div>
            ))}
          </Slider>
        </ImgBox>
        <ReviewContents>{reviewList.length != 0 && reviewList[index].review_content}</ReviewContents>
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