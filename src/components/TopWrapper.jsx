import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
    width: 350px;
    height: 170px;
    background-color: rgba(255, 255, 255, 0.50);
    margin: 0 auto;    
    margin-top:70px;
    margin-bottom:0px;
    border-radius: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    overflow-x: scroll;
    overflow-y:hidden;
    filter: drop-shadow(0px 10px 24px rgba(99, 99, 99, 0.15));
`  

const TopWrapper = ({children}) => {
    return (
        <>
       <Box>{children}</Box>
        </>
    );
};

export default TopWrapper;