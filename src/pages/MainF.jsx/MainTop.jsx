import React from 'react';
import Button from '../../components/Button';
import  styled  from 'styled-components';
const MaintopBox = styled.div`
width: 370px;
height: 130px;
background-color: white;
opacity: 50%;
z-index: 0;
margin: 0 auto;
border-radius: 20px;
margin-top: 15%;
filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
`

const MainTop = () => {
    return (
        <>
        <MaintopBox>
            </MaintopBox>
            <Button
            Buttonwidth = "100px"
            Buttonheight = "40px"
            Buttontop = "105px"
            Buttonleft = "85px"
            ButtonColor="#FFFFFF"
            Buttonborder="1px solid #FF9494"
            Buttonborderrad = "10px"
            text="전체지역"
            textcolor = "#FF9494"
            >
            </Button>
            <Button
            Buttonwidth = "70px"
            Buttonheight = "40px"
            Buttontop = "105px"
            Buttonleft = "180px"
            ButtonColor="#FFFFFF"
            Buttonborder="1px solid #747272"
            Buttonborderrad = "10px"
            text="모양"
            textcolor = "#747272"></Button>
            <Button
            Buttonwidth = "70px"
            Buttonheight = "40px"
            Buttontop = "105px"
            Buttonleft = "260px"
            ButtonColor="#FFFFFF"
            Buttonborder="1px solid #747272"
            Buttonborderrad = "10px"
            text="크기"
            textcolor = "#747272"></Button>
            <Button
            Buttonwidth = "100px"
            Buttonheight = "40px"
            Buttontop = "165px"
            Buttonleft = "85px"
            ButtonColor="#FF9494"
            Buttonborderrad = "20px"
            text="쿠폰할인"
            textcolor = "#FFFFFF"></Button>
            <Button
            Buttonwidth = "100px"
            Buttonheight = "40px"
            Buttontop = "165px"
            Buttonleft = "195px"
            ButtonColor="#FF9494"
            Buttonborderrad = "20px"
            text="주간랭킹"
            ></Button>
            <Button
            Buttonwidth = "80px"
            Buttonheight = "45px"
            Buttontop = "165px"
            Buttonleft = "350px"
            ButtonColor="Transparent"
            Buttonborderrad = "10px"
            text="별점 순 👇"></Button>
           
            </>
    );
};

export default MainTop;