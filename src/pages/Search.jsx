import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import { FiSearch } from "react-icons/fi";
const SearchBox = styled.div`
    width: 350px;
    height: 50px;
    background-color: white;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
`
const Searchicons = styled.div`
    margin-left: 14px;
    margin-top: 5px;
`
const Search = () => {
    return (
       <>
       <Layout color = '#FFF5E4'>
        <SearchBox>
            <Searchicons><FiSearch color="black" size="35px" /></Searchicons>
        </SearchBox>
       <Footer></Footer>
       </Layout>
       </>
    );
    
};

export default Search;