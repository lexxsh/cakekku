import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './SearchBox.css';
const Searchicons = styled.div`
  position: absolute;
  left: 25px;
  top: 62px;
`;

const Box = styled.div`
  width: 350px;
  height: 167px;
  background-color: rgba(255, 255, 255, 0.50);
  border-radius: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Box2 = styled.div`
  width: 350px;
  height: 2000px;
  background-color: rgba(255, 255, 255, 0.50);
  border-radius: 30px;
  margin-top: 30px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Box3 = styled.div`
  width: 350px;
  height: 410px;
  background-color: rgba(255, 255, 255, 0.50);
  border-radius: 30px;
  margin-top: 30px;
  display: ${(props) => (props.show ? "block" : "none")};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Boxs = styled.div`
  width: 170px;
  height: 80px;
  text-align: center;
  background-color: white;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 15px;
`;

const Boxgu = styled.div`
  width: 170px;
  height: 30px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Boxtext = styled.p`
  font-size: 15px;
`;

const Boxtext2 = styled.p`
  font-size: 10px;
`;

const Search = () => {
  const [search, setSearch] = useState("");
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  const handleSearch = () => {
    // 검색 버튼 클릭 시 URL 파라미터에 검색어 추가하여 MySearch 페이지로 이동
    const queryParams = new URLSearchParams({ sort: search });
    console.log(queryParams);
    const url = `/Mysearch?${queryParams.toString()}`;
    window.location.href = url;
  };

  const handleBoxClick = (boxNum) => {
    if (boxNum === 2) {
      setShowBox2(true);
      setShowBox3(false);
    } else {
      setShowBox2(false);
      setShowBox3(false);
    }
  };

  return (
    <Layout color="#FFF5E4">
      <div className="ad">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <label>가게이름</label>
        <span className="sp"></span>
      </div>
      <Link to={`/Mysearch?search=${search}`}>
        <Searchicons>
          <FiSearch color="black" size="30px" onClick={handleSearch} />
        </Searchicons>
      </Link>
      <Box>
        <Boxs onClick={() => handleBoxClick(2)}>
          <Text>서울</Text>
        </Boxs>
        <Boxs onClick={() => handleBoxClick(2)}>
          <Text>경기</Text>
        </Boxs>
        <Boxs onClick={() => handleBoxClick(3)}>
          <Text>인천</Text>
        </Boxs>
        <Boxs onClick={() => handleBoxClick(2)}>
          <Text>부산</Text>
        </Boxs>
      </Box>
      <Box2 show={showBox2}>지원가능한 매장이 아직 없습니다 ㅠㅠ.</Box2>
      <Box3 show={showBox3}>
        <Link to="/Searchresultsi">
          <Boxgu>
            <Boxtext>인천</Boxtext>
            <Boxtext2>전체</Boxtext2>
          </Boxgu>
        </Link>
        <Link to="/Searchresult1">
          <Boxgu>
            <Boxtext>남동구</Boxtext>
            <Boxtext2>구월, 논현</Boxtext2>
          </Boxgu>
        </Link>
        <Link to="/Searchresult2">
          <Boxgu>
            <Boxtext>연수구</Boxtext>
            <Boxtext2>송도, 원인재</Boxtext2>
          </Boxgu>
        </Link>
        <Link to="/Searchresult3">
          <Boxgu>
            <Boxtext>계양구</Boxtext>
            <Boxtext2>계산, 작전</Boxtext2>
          </Boxgu>
        </Link>
        <Link to="/Searchresult4">
          <Boxgu>
            <Boxtext>부평구</Boxtext>
            <Boxtext2>삼산, 갈산</Boxtext2>
          </Boxgu>
        </Link>
        <Link to="/Searchresult5">
          <Boxgu>
            <Boxtext>미추홀구</Boxtext>
            <Boxtext2>주안, 용현</Boxtext2>
          </Boxgu>
        </Link>
      </Box3>
      <Footer />
    </Layout>
  );
};

export default Search;
