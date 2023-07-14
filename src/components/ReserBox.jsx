import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Starreview from './Star/StarReivew';
const ReserBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-width: 0px 0px 5px 0px;
  border-style: solid;
  border-color: rgba(200, 200, 200, 0.80);
  //margin-top: 25px;
`;

const ReserImg = styled.img`
  background-image: url(${(props) => props.imageUrl});
  width: 200px;
  height: 200px;
  margin-right: 5px;
  margin-bottom: 20px;
  //margin-left: 20px;
  background-size: cover;
  background-position: center;
`;

const Reser1Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: -4rem;
`;

const ReserButton = styled.div`
  padding: 8px;
  background-color: #FFE3E1;
  border-radius: 30px;
  width: 75px;
  height: 10px;
  margin-left: 4rem;
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
  margin-left: 4rem;
`;

const ReserBody = styled.p`
  color: #747272;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin-left: 1rem;
`;
const HashContainer = styled.div`
    margin-left: 3rem;
`
const HashBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ selected }) => (selected ? '#FFE3E1' : '#DBDBDB')};
  border-radius: 10px;
  flex-shrink: 0;
  height: 10px;
  width: fit-content;
  padding: 0.4rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  flex-direction: row;
`;

const Hashtag = styled.p`
  color: ${({ selected }) => (selected ? '#FF9494' : '#747272')};
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ReserBox = (props) => {
    const navigate = useNavigate();
    const { onClick, index } = props;
    const handleClick = () => {
      navigate(onClick);
    };
  
    const [infor, setInfor] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://cakekku.shop/myreviewlist/`)
        .then((res) => {
          console.log(res);
          setInfor(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
  
    if (!infor || infor.length === 0) {
      return null; // Render nothing if `infor` is empty or null
    }
    const handleClickReview = () => {
        window.location.href = '/Myreview/review1';
      };
    const marketData = infor[index];
    console.log(marketData);
    const imageUrl = `https://cakekku.shop${marketData.review_image1}`;
    const renderHashBox = (text, value) => {
        if (value) {
          return (
            <HashBox>
              <Hashtag>{text}</Hashtag>
            </HashBox>
          );
        }
        return null;
      };
    return (
      <ReserBoxWrapper>
        <ReserImg imageUrl={imageUrl} />
        <Reser1Box onClick={handleClick}>
            <ReserButton onClick={handleClickReview}>리뷰 쓰기</ReserButton>
          <ReserTitle>케이크니</ReserTitle>
          <HashContainer>
          <ReserBody>
            {marketData.review_content}
            {marketData.review_tag1 && (
        <HashBox>
          <Hashtag>#맛있어요</Hashtag>
        </HashBox>
      )}
      {marketData.review_tag2 && (
        <HashBox>
          <Hashtag>#신선해요</Hashtag>
        </HashBox>
      )}
      {marketData.review_tag3 && (
        <HashBox>
          <Hashtag>#친절해요</Hashtag>
        </HashBox>
      )}
      {marketData.review_tag4 && (
        <HashBox>
          <Hashtag>#원하는 디자인이에요</Hashtag>
        </HashBox>
      )}
      {marketData.review_tag5 && (
        <HashBox>
          <Hashtag>#맞춤형 디자인이에요</Hashtag>
        </HashBox>
      )}
      {marketData.review_tag6 && (
        <HashBox>
          <Hashtag>#포장이 꼼꼼해요</Hashtag>
        </HashBox>
      )}
          </ReserBody>
          </HashContainer>
          <Starreview rating={marketData.review_score} />
        </Reser1Box>
      </ReserBoxWrapper>
    );
  };
  
  export default ReserBox;
