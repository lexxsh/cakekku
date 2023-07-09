import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchBox.css";

const Searchicons = styled.div`
    position: absolute;
    left: 25px;
    top:62px;
`
const Box = styled.div`
    width: 350px;
    height: 167px;
    background-color:rgba(255, 255, 255, 0.50);
    border-radius: 30px;
    margin-top:30px;
    
`
const Box2 = styled.div`
    width: 350px;
    height: 410px;
    background-color:rgba(255, 255, 255, 0.50);
    border-radius: 30px;
    margin-top:30px;
`
const Search = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
        console.log(e)
    }

    return (
       <>
       <Layout color = '#FFF5E4'>
        <div className="ad">
            <input type="text" value={search} onChange={onChange} required></input>
            <label>가게이름</label>
            <span className='sp'></span>
        </div>
            <Searchicons><FiSearch color="black" size="30px" /></Searchicons>
        <Box></Box>
        <Box2></Box2>
       <Footer></Footer>
       </Layout>
       </>
    );
    
};

export default Search;