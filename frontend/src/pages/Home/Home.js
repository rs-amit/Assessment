import React,{useEffect, useState} from 'react'
import styled from "styled-components"
import Slider from '../../components/Slider'
import {bannerList, categoryList} from "./components/const"
import { PublicRequest } from "../../api/Api";
import PopularProducts from './components/PopularProducts'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Announcement from '../../components/Announcement';
import Categories from './components/Categories';

const Container = styled.div`
  position:relative;
`


function Home() {



  return (
    <>
    <Header/>
    <Announcement
      offerMessage="Super Deal! Free Shopping on Order Over $100"
      bgColor="#FFD81C"
      textColor="black"
    />
    <Container>
      <Slider bannerList={bannerList}/>
      <Categories categoryList={categoryList}/>
      <PopularProducts 
        categoryList={categoryList}
        popularProduct = "show"/>
    </Container>
    <Footer/>
    </>
  )
}

export default Home;
