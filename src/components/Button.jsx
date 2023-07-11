import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
    width: ${(props) => (props.Buttonwidth ? props.Buttonwidth : "10%")};
    height: ${(props) => (props.Buttonheight ? props.Buttonheight : "10%")};
    background-color: ${(props) => (props.ButtonColor ? props.ButtonColor : "white")};
    position: absolute;
    left:${(props) => (props.Buttonleft ? props.Buttonleft : "50%")};
    top:${(props) => (props.Buttontop ? props.Buttontop : "50%")};
    bottom:${(props) => (props.Buttonbottom ? props.Buttonbottom : "none")};
    transform: translate(-50%,-50%);
    border:${(props) => (props.Buttonborder ? props.Buttonborder : "none")};
    border-radius:${(props) => (props.Buttonborderrad ? props.Buttonborderrad : "20px")};
    opacity:${(props) => (props.Buttonopacity ? props.Buttonopacity : "1")};
    animation:${(props) => (props.Buttonanimation ? props.Buttonanimation : "none")};
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;
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
    const{onClick}=props;
    return (
        <>
        <Button Buttonheight = {props.Buttonheight}
                Buttonwidth = {props.Buttonwidth}
                ButtonColor = {props.ButtonColor}
                Buttonleft = {props.Buttonleft}
                Buttontop = {props.Buttontop}
                Buttonbottom = {props.Button}
                Buttonopacity = {props.Buttonopacity}
                Buttonanimation = {props.Buttonanimation}
                Buttonborder = {props.Buttonborder}
                Buttonborderrad = {props.Buttonborderrad}
                onClick={props.onClick}>
            <ButtonText
             textcolor = {props.textcolor}
             text={props.text}>{props.text}
             </ButtonText>
        </Button>
        </>
    );
};

export default button;