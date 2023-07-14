import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiLike, BiSortZA } from 'react-icons/bi';
import RatingStars from './Star/StarMaketbox';

const FirstBox = styled.div`
  height: 140px;
  width:  330px;
  opacity: 90%;
  background-color: #ffffff;
  border-radius: 30px;
  margin: 0 auto;
  filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
  overflow: hidden;
`

const ImgBox = styled.div`
  height: 140px;
  width:  140px;
  border-radius: 30px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`
const Circle = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #D9D9D9;
`
const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  top:30%;
  left:30%;
  font-size: 24px;
  opacity: 70%;
  z-index:5;
`;

const LikeIcon = styled(BiLike)`
  color: ${(props) => (props.liked ? 'red' : 'inherit')};
`;
const Marketname = styled.p`
  margin: 0;
  position: absolute;
  left: 53%;
  top: 6%;
  color: #FF9494;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`

const Marketaddres = styled.p`
  margin: 0;
  position: absolute;
  left: 53%;
  top: 22%;
  color: #747272;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
`

const HashBox = styled.div`
  display: inline-flex;
  align-items: center;
  background: #FFE3E1;
  border-radius: 10px;
  padding: 0 8px;
  margin-right: 8px;
  flex-shrink: 0;
  height: 21.847px;
  padding: 2px;
  margin: 0;
  position: absolute;
  left: 75%;
  top: 40%;
`;

const HashBox2 = styled.div`
  display: inline-flex;
  align-items: center;
  background: #FFE3E1;
  border-radius: 10px;
  margin-right: 8px;
  flex-shrink: 0;
  height: 21.847px;
  padding: 2px;
  margin-right: 15px;
  position: absolute;
  left: 53%;
  top: 40%;
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

const MarketPrice = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin: 0;
  position: absolute;
  left: 53%;
  top: 80%;
`

const Container = styled.div`
  margin: 0 auto;
  margin-top: ${(props) => (props.Top ? props.Top : "30px")};
  margin-bottom: ${(props) => (props.Bottom ? props.Bottom : "30px")};
  display: flex;
  justify-content: center;
  align-items: center;
`

const MarketBox = (props) => {
  const { index, sort } = props;
  const [infor, setInfor] = useState([]);
  const [liked, setLiked] = useState(false); // State variable for liked state

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/marketlist/?order=${sort}`)
      .then((res) => {
        setInfor(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [sort]);

  useEffect(() => {
    if (infor.length === 0) {
      return;
    }

    const marketData = infor[index];
    
    axios
      .get(`https://cakekku.shop/checkislike/?store_id=${marketData.store_id}`)
      .then((res) => {
        console.log(res);
        setLiked(res.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [infor, index]);

  if (infor.length === 0) {
    return null;
  }

  const marketData = infor[index];
  const imageUrl = `https://cakekku.shop${marketData.store_thumbnail_image}`;
  
  
  const handleLike = () => {
    setLiked(prevLiked => !prevLiked); // Toggle the liked state
  
    axios
      .post('https://cakekku.shop/marketlike/', {
        store_id: marketData.store_id
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  return (
    <>
      <LikeButton onClick={handleLike}>
      <Circle><LikeIcon liked={liked} /></Circle>
      </LikeButton>
      <Link to={`/marketdetail/${marketData.store_id}`}>
        <Container Top={props.Top} Bottom={props.Bottom}>
          <FirstBox Firsttop={props.Firsttop}>
            <ImgBox imageUrl={imageUrl}>
              <Marketname>{marketData.store_name}</Marketname>
              <Marketaddres>{marketData.store_address}</Marketaddres>

              <HashBox>
                <Hashtag>{marketData.store_hashtag_1}</Hashtag>
              </HashBox>
              <HashBox2>
                <Hashtag>{marketData.store_hashtag_2}</Hashtag>
              </HashBox2>
            </ImgBox>
            <MarketPrice>
              기본 {marketData.store_lower_price} ~ {marketData.store_higher_price}
            </MarketPrice>
            <RatingStars rating={marketData.store_average_score} />
          </FirstBox>
        </Container>
      </Link>
    </> 
  );
};

export default MarketBox;
