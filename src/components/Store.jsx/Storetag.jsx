import React,{useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
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
  const {store_id} = useParams();
    const [infor,setInfor]=useState([]);
    useEffect(()=>{
        axios
            .get(`https://cakekku.shop/marketdetail/${store_id}/`)
            .then((res) => {
                console.log(res);
                setInfor(res.data);
            })
            .catch((e)=>{
                console.log(e)
            });
        },[]);
  return (
    <>
      <HashBox>
        <Hashtag>{infor.store_hashtag_1}</Hashtag>
      </HashBox>
      <HashBox>
        <Hashtag>{infor.store_hashtag_2}</Hashtag>
      </HashBox>
    </>
  );
};

export default Storedetail;
