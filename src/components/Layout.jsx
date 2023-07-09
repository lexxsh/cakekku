import React from 'react';
import styled from 'styled-components'
const AppLayout  = styled.div`
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    background-color:${(props) => (props.MainColor ? props.MainColor : "pink")};
    overflow-y:hidden;
`
const Layout = (props) => {
    return (
       <>
       <AppLayout MainColor = {props.MainColor}></AppLayout>
       </>
    );
};

export default Layout;