import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 350px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;
    margin-top: ${(props) => (props.Top ? props.Top : "20px")};
    //display: ${(props)=>(props.display ? props.display : "none")};
    //position: ${(props)=>(props.position ? props.position : "none")};
    margin-bottom: ${(props) => (props.Bottom ? props.Bottom : "75px")};
    border-radius: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    overflow-x: scroll;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.10), 0 15px 12px rgba(0, 0, 0, 0.10);
`;

const Wrapper = ({ children, Top, Bottom, display, position }) => {
    return (
        <>
            <Box Top={Top} Bottom={Bottom} display ={display} position={position}>
                {children}
            </Box>
        </>
    );
};

export default Wrapper;
