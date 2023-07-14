import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CakeBoxContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  margin-bottom: 10px;
  display: flex;
  margin-top: 10px;
  margin-left: 0px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

const CakeBox = ({ index }) => {
  const [infor, setInfor] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios
      .get(`https://cakekku.shop/mydesigncakelist/`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (infor.length > 0) {
      const marketData = infor[index];
      const imageUrl = `https://cakekku.shop${marketData.my_cake_image}`;
      setImageUrl(imageUrl);
    }
  }, [infor, index]);

  return <CakeBoxContainer imageUrl={imageUrl}></CakeBoxContainer>;
};

export default CakeBox;
