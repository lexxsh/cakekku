import React, { useState } from 'react';
import Button from '../../components/Button';

const MainTop = ({setSort}) => {
    const handleButtonClick = (buttonText) => {
        let sortValue = '';
        switch (buttonText) {
            case '전체':
                sortValue = '';
              break;
            case '리뷰 수':
                sortValue = 'review_count';
              break;
            case '낮은 가격 순':
                sortValue = 'lower_price';
              break;
            case '높은 가격 순':
                sortValue = 'higher_price';
                break;
            case '별점 순':
                sortValue = 'score';
              break;
            default:
              break;
        }
        setSort(sortValue);
        console.log(sortValue);
    };

    return (
        <>            
        <Button
            Buttonwidth = "100px"
            Buttonheight = "40px"
            Buttontop = "40px"
            Buttonleft = "85px"
            ButtonColor="#FFFFFF"
            Buttonborder="1px solid #FF9494"
            Buttonborderrad = "10px"
            text="전체"
            textcolor = "#FF9494"
            onClick={() => handleButtonClick("전체")}
            />
            <Button
            Buttonwidth = "70px"
            Buttonheight = "40px"
            Buttontop = "40px"
            Buttonleft = "180px"
            ButtonColor="#FFFFFF"
            Buttonborder="1px solid #747272"
            Buttonborderrad = "10px"
            text="리뷰 수"
            textcolor = "#747272"
            onClick={() => handleButtonClick("리뷰 수")}
            />
            <Button
            Buttonwidth = "70px"
            Buttonheight = "40px"
            Buttontop = "40px"
            Buttonleft = "260px"
            ButtonColor="#FFFFFF"
            Buttonborder="1px solid #747272"
            Buttonborderrad = "10px"
            text="별점 순"
            textcolor = "#747272"
            onClick={() => handleButtonClick("별점 순")}
            />
            <Button
            Buttonwidth = "100px"
            Buttonheight = "40px"
            Buttontop = "90px"
            Buttonleft = "85px"
            ButtonColor="#FF9494"
            Buttonborderrad = "20px"
            text="낮은 가격 순"
            textcolor = "#FFFFFF"
            onClick={() => handleButtonClick("낮은 가격 순")}
            />
            <Button
            Buttonwidth = "100px"
            Buttonheight = "40px"
            Buttontop = "90px"
            Buttonleft = "195px"
            ButtonColor="#FF9494"
            Buttonborderrad = "20px"
            text="높은 가격 순"
            textcolor = "#FFFFFF"
            onClick={() => handleButtonClick("높은 가격 순")}
            />
        </>

    );
};

export default MainTop;