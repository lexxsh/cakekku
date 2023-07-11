import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { FaBox } from "react-icons/fa";
import { BiSolidStore } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Pickup = styled.div`
    color: ${(props) => (props.color ? props.color : "black")};
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: ${(props) => (props.weight ? props.weight : "500")};
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin : 1px;
`;

const IconContainer = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    
`;

const TextContainer3 = styled.div`
    display:flex;
    flex-direction: flex-start;
    justify-content: column;
    margin-top: -25px;
    `



function Storedetail() {
    const navigate = useNavigate(); 
    const navigatetoMain = () => {
    navigate("/Order1");
  }
    return (
      <>
        <Pickup>
          <TextContainer3>
          수령방식
          </TextContainer3>
          <TextContainer>
          <TextContainer2>
            <IconContainer>
            <FaBox color="#FF9494" size={13} /></IconContainer>
            <Pickup weight="700">택배가능</Pickup>
            <Pickup color="#747272">&nbsp;평균 2일 / 최대 2일 이내</Pickup>
            </TextContainer2>
            
            <TextContainer2>
            <IconContainer>
            <BiSolidStore color="#FF9494" size={16} /></IconContainer>
            <Pickup weight="700">픽업가능</Pickup>
            <Pickup color="#747272">&nbsp;영업일기준, 공휴일불가</Pickup>
            </TextContainer2>
            </TextContainer>
        </Pickup>

        <Pickup>
          <TextContainer3>
          주문방식</TextContainer3>
          <IconContainer>
        <Pickup weight="700">평균 2일 전까지 주문 가능한 스토어입니다</Pickup>
        <Pickup color="#FF9494">고정디자인으로<Pickup>&nbsp;주문 및 예약 
        <Button 
            Buttonwidth ="76px"
            Buttonheight = "16px"
            ButtonColor="#FF9494"
            Buttontop = " 770px"
            Buttonleft = "300px"
            fontsize="11px"
            text="바로가기"
            onClick={navigatetoMain}
            >
            </Button>
            
        </Pickup>
        
        </Pickup> 
        <Pickup color="#FF9494">직접디자인으로<Pickup>&nbsp;주문 및 예약</Pickup></Pickup>
        <Button 
            Buttonwidth ="76px"
            Buttonheight = "16px"
            ButtonColor="#FF9494"
            Buttontop = " 792px"
            Buttonleft = "300px"
            fontsize="11px"
            text="바로가기"
            onClick={()=>alert("구현중 ㅎㅎ")}
            >
            </Button>
        <Pickup color="#FF9494">실시간 상담</Pickup>
        <Button 
            Buttonwidth ="76px"
            Buttonheight = "16px"
            ButtonColor="#FF9494"
            Buttontop = " 815px"
            Buttonleft = "300px"
            fontsize="11px"
            text="바로가기"
            onClick={()=>alert("구현중 ㅎㅎ")}
            >
            </Button>
        </IconContainer>
            
            
        </Pickup>

      </>
    );
}


export default Storedetail;