import React from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import img from '../../Store_ex.png';
import img2 from '../../pngwing 1.png';
import StarReivew from '../../components/Star/StarReivew';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Myreview from '../Myreview';

const ResTtitle = styled.p`
color: #747272;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
margin:0px;
margin-top:100px;

`
const StoreImg = styled.img`
  background-color: none;
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 10px;
  position: relative;
  margin: 80px auto;
  //left: 10.5rem;
  //transform: translateX(-50%);
  display:flex;
  z-index:1;
`; 

const StoreImg2 = styled.img`
  background-color: none;
  width: 300px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 10px;
  position: absolute;
  margin: 100px auto;
  //left: 10.5rem;
  //transform: translateX(-50%);
  display:flex;
  z-index:0;
`; 

const Storename = styled.p`
color: #000;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
display:flex;
justify-content: center;
align-items: center;
margin-top:-40%;
`

const Storemenu = styled.p`
color: #636363;
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.5px;
display:flex;
justify-content: center;
align-items: center;
margin-top:-2%;
`

const TextWrapper = styled.span`
  color: #FF9494;
`;

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
`

const HashBox = styled.div`
  display: inline-flex;
  align-items: center;
  background: #FFE3E1;
  border-radius: 10px;
  padding: 0 8px;
  margin-right: 8px;
  flex-shrink: 0;
  margin: 5 auto;
  height: 21.847px;
`;

const Hashtag = styled.p`
color: #FF9494;
text-align: center;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.5px;
`;

const CompleteText = styled.p`
color: #000;
text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
display:flex;
justify-content: center;
align-items: center;
margin-top:2rem;
`
const CompleteText2 = styled.p`
color: #747272;
text-align: center;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.5px;
display:flex;
justify-content: center;
align-items: center;
margin-top:3rem;
`


const Review3 = () => {
    const navigate = useNavigate(); 
    const navigatetoMain = () => {
    navigate("/Myreview");
  }
    return (
        <><Layout color="white">
        <Head2></Head2>
          <Container>
        <StoreImg src={img} />
        </Container>
        <StoreImg2 src={img2} />
        <Storename>케이크니</Storename>
        <Storemenu>도시락 케이크</Storemenu>
        <HashBox>
            <Hashtag>#맛있어요</Hashtag>
        </HashBox>
        <CompleteText>리뷰 작성 완료!</CompleteText>
        <CompleteText2>
        작성해주신 리뷰는 다른 구매자들의 주문에<br/>많은 도움이 될거에요
        </CompleteText2>
        <Button
        Buttonwidth= "328px"
        Buttonheight = "40px"
        ButtonColor = "#FF9494"
        Buttontop="43rem"
        text = "다음"
        fontsize="25px"
        onClick={navigatetoMain}
        >
        </Button>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default Review3;