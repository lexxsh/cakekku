import React from "react";
import styled from "styled-components";


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
  color: #747272;
  text-align: center;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

function Storedetail() {
  return (
    <>
      <HashBox>
        <Hashtag>레터링 케이크</Hashtag>
      </HashBox>
      <HashBox>
        <Hashtag>입체 케이크</Hashtag>
      </HashBox>
      <HashBox>
        <Hashtag>생화 케이크</Hashtag>
      </HashBox>
    </>
  );
};

export default Storedetail;
