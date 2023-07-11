import React, { useState } from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';

const Title = styled.p`
color: #FF9494;
text-align: center;
font-family: Preahvihear;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 34px;
letter-spacing: -0.6px;
margin: 0px;
margin-top: 100px;
`

const Blackwrapper = styled.span`
    color:black;
`
const Sub = styled.p`
    color: #FF9494;
    text-align: left;
    font-family: Preahvihear;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.6px;
    margin: 0px;
    margin-top: 100px;
    margin-left: 20px;
`
const TextContainer = styled.div`
    display: flex;
    margin-top:-20%;
    width:100%;
    align-items: left;
`

const Container = styled.div`
  width: 330px;
  height: 50px;
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
  height: 60%;
  border: none;
  font-size: 5px;
  white-space: pre-line;
  outline: none;
  resize:none;
  background-color: rgba(255, 255, 255, 0.50);
`;

const Button = styled.button`
    width: 100px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFD7D7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:30px;
    border: 1px solid #FF9494;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
    margin: 10px;
    
`
const ButtonBox = styled.div`
    display: flex;
justify-content: center;
align-items: center;
margin-top: 0.5rem;
`


const Order1 = () => {
    const [sizeText, setSizeText] = useState('');
    const [designText, setDesignText] = useState('');
    const [breadText, setBreadText] = useState('');
    const [plusText, setPlusText] = useState('');

    const handleInputChange = (event) => {
      setSizeText(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setDesignText(event.target.value);
      };

    const handleInputChange3 = (event) => {
        setBreadText(event.target.value);
      };

      const handleInputChange4 = (event) => {
        setPlusText(event.target.value);
      };

    return (
        <><Layout  color = '#FFF5E4'>
        <Head2></Head2>
        <Title>고정디자인<Blackwrapper>으로 주문하기</Blackwrapper></Title>
        <Wrapper>

        <TextContainer>
        <Sub>사이즈</Sub>
        </TextContainer>
        <Container>
  <Input
    placeholder="스토어의 주문 양식을 참고해주세요"
    value={sizeText}
    onChange={handleInputChange}
  />
    </Container>

    <TextContainer>
        <Sub>빵+샌딩 선택</Sub>
        </TextContainer>
        <Container>
  <Input
    placeholder="스토어의 주문 양식을 참고해주세요"
    value={breadText}
    onChange={handleInputChange3}
  />
    </Container>

<TextContainer>
        <Sub>고정디자인</Sub>
        </TextContainer>
        <Container>
  <Input
    placeholder="스토어의 주문 양식을 참고해주세요"
    value={designText}
    onChange={handleInputChange2}
  />
    </Container>

    <TextContainer>
        <Sub>주문 요청사항</Sub>
        </TextContainer>
        <Container>
  <Input
    placeholder="추가적인 요청사항을 적어주세요"
    value={plusText}
    onChange={handleInputChange4}
  />
    </Container>
            <ButtonBox>
            <Button>주문 완료</Button>
            </ButtonBox>
    </Wrapper>
        <Footer></Footer>
        </Layout>
        </>
    );
};

export default Order1;