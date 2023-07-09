import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
    width: ${(props) => (props.Buttonwidth ? props.Buttonwidth : "100px")};
    height: ${(props) => (props.Buttonheight ? props.Buttonheight : "100px")};
    background-color: ${(props) => (props.ButtonColor ? props.ButtonColor : "white")};
    position: absolute;
    left:${(props) => (props.Buttonleft ? props.Buttonleft : "50%")};
    top:${(props) => (props.Buttontop ? props.Buttontop : "50%")};
    transform: translate(-50%,-50%);
    border:${(props) => (props.Buttonborder ? props.Buttonborder : "none")};
    border-radius:${(props) => (props.Buttonborderrad ? props.Buttonborderrad : "20px")};
    opacity:${(props) => (props.Buttonopacity ? props.Buttonopacity : "1")};
    animation:${(props) => (props.Buttonanimation ? props.Buttonanimation : "none")};
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes fadeout {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
const ButtonText = styled.p`
    font-size: 15px;
    color:${(props) => (props.textcolor ? props.textcolor : "black")};

`
const button = (props) => {
    return (
        <>
        <Button Buttonheight = {props.Buttonheight}
                Buttonwidth = {props.Buttonwidth}
                ButtonColor = {props.ButtonColor}
                Buttonleft = {props.Buttonleft}
                Buttontop = {props.Buttontop}
                Buttonopacity = {props.Buttonopacity}
                Buttonanimation = {props.Buttonanimation}
                Buttonborder = {props.Buttonborder}
                Buttonborderrad = {props.Buttonborderrad}>
            <ButtonText
             textcolor = {props.textcolor}>{props.text}</ButtonText>
        </Button>
        </>
    );
};

export default button;