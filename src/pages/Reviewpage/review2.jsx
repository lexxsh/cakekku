import React, { useState } from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import img from '../../Store_ex.png';
import StarReivew from '../../components/Star/StarReivew';
import Button from '../../components/Button';
import Review3 from './review3';
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

const Marketname = styled.p`
  margin: 0;
  margin-top: -2rem;
  position: relative;
  left: -1rem;
  top: 0.2rem;
  color: #FF9494;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const Marketaddres = styled.p`
  margin: 0;
  position: relative;
  left: 0.1rem;
  top: 0.1rem;
  color: #747272;
  text-align: left;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ReviewText = styled.p`
  margin: 0;
  margin-top: 3rem;
  margin-left: -9rem;
  color: #000;
  text-align: left;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const ReviewText2 = styled.p`
  margin: 0;
  margin-top: 1rem;
  margin-left: -11rem;
  color: #000;
  text-align: left;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  position: relative;
  left: 0.7rem;
`;

const TextWrapper = styled.span`
  color: #747272;
`;

const StoreImg = styled.img`
  background-color: none;
  width: 100px;
  height: 93.966px;
  flex-shrink: 0;
  border-radius: 10px;
  position: relative;
  margin: 20px auto;
  top: 5rem;
  left: -5rem;
  transform: translateX(-50%);
`;

const HashBox = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${({ selected }) => (selected ? '#FFE3E1' : '#DBDBDB')};
  border-radius: 10px;
  flex-shrink: 0;
  height: 25px;
  padding: 0.4rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  flex-direction: row;
`;

const Hashtag = styled.p`
  color: ${({ selected }) => (selected ? '#FF9494' : '#747272')};
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const Container = styled.div`
  width: 350px;
  height: 152px;
  flex-shrink: 0;
  border-radius: 24px;
  margin: 0 auto;
  border: 1px solid #8F8F8F;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Input = styled.textarea`
  width: 90%;
  height: 80%;
  border: none;
  font-size: 5px;
  white-space: pre-line;
  outline: none;
  resize:none;
`;

const TagContainer = styled.div`
  flex-direction: row;
`;

const Review2 = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const navigate = useNavigate(); 
  const navigatetoMain = () => {
  navigate("/Myreview/review3");
}


const [reviewText, setReviewText] = useState('');

const handleInputChange = (event) => {
  setReviewText(event.target.value);
};

  return (
    <>
      <Layout color="white">
        <Head2></Head2>
        <StoreImg src={img} />
        <Marketname>메리고라운드</Marketname>
        <Marketaddres>종류: 도시락케이크<br />추가옵션: 하트초, 미니보냉백</Marketaddres>
        <ReviewText>이런점이 가장 좋았어요</ReviewText>

        <TagContainer>
          <HashBox
            selected={selectedTags.includes('#맛있어요')}
            onClick={() => handleTagClick('#맛있어요')}
          >
            <Hashtag selected={selectedTags.includes('#맛있어요')}>#맛있어요</Hashtag>
          </HashBox>
          <HashBox
            selected={selectedTags.includes('#원하는디자인이에요')}
            onClick={() => handleTagClick('#원하는디자인이에요')}
          >
            <Hashtag selected={selectedTags.includes('#원하는디자인이에요')}>
              #원하는디자인이에요
            </Hashtag>
          </HashBox>
          <HashBox
            selected={selectedTags.includes('#맞춤형디자인이에요')}
            onClick={() => handleTagClick('#맞춤형디자인이에요')}
          >
            <Hashtag selected={selectedTags.includes('#맞춤형디자인이에요')}>
              #맞춤형디자인이에요
            </Hashtag>
          </HashBox>
          <HashBox
            selected={selectedTags.includes('#신선해요')}
            onClick={() => handleTagClick('#신선해요')}
          >
            <Hashtag selected={selectedTags.includes('#신선해요')}>#신선해요</Hashtag>
          </HashBox>
          <HashBox
            selected={selectedTags.includes('#친절해요')}
            onClick={() => handleTagClick('#친절해요')}
          >
            <Hashtag selected={selectedTags.includes('#친절해요')}>#친절해요</Hashtag>
          </HashBox>
          <HashBox
            selected={selectedTags.includes('#포장이꼼꼼해요')}
            onClick={() => handleTagClick('#포장이꼼꼼해요')}
          >
            <Hashtag selected={selectedTags.includes('#포장이꼼꼼해요')}>
              #포장이꼼꼼해요
            </Hashtag>
          </HashBox>
        </TagContainer>

        <ReviewText2>사진을 등록해주세요 <TextWrapper>(선택)</TextWrapper></ReviewText2>
        <ReviewText2>상세한 후기를 작성해주세요</ReviewText2>
        <Container>
  <Input
    placeholder="주문하신 케이크의 후기를 남겨주시면 다른 구매자들에게도 도움이 됩니다."
    value={reviewText}
    onChange={handleInputChange}
  />
</Container>
        <Button
          Buttonwidth="328px"
          Buttonheight="40px"
          ButtonColor="#FF9494"
          Buttontop="43rem"
          text="리뷰 작성 완료하기"
          onClick={navigatetoMain}
        >
        </Button>
        <Footer></Footer>
      </Layout>
     
    </>
  );
};

export default Review2;