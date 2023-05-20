import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const CategoryItemContainer = styled.div`
  aspect-ratio:16/9;  
  margin:5px;
  background-color:#f7e8e8;
  position:relative;
`
const Image = styled.img`
  width:100%;
  flex:1 1 150px;
`

  const CategoryInfo = styled.div`
   position:absolute;
   top:0;
   left:0;
   width:100%;
   height:100%;
   display:flex;
   align-items:center;
   flex-direction:column;
   justify-content:center;
   background-color:rgba(0,0,0,0.2);
`
const CategoryTitle = styled.div`
   font-size: 1.2rem;
   font-weight: 600;
   color:white;
`
const Button = styled.button`
   padding:5px 10px;
   font-size:16px;
   box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
   -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
   -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
   opacity:0.8;
   margin:5px 0;
`


function CategoryItem({item}) {

  console.log("item", item)

  return (
    <CategoryItemContainer>
      <Link to={`/products`} state={{data : item.category}}>
        <Image src={item.image}/>
        <CategoryInfo>
            <CategoryTitle>{item.title}</CategoryTitle>
            <Button>SHOP NOW</Button>
        </CategoryInfo>
      </Link>
      
    </CategoryItemContainer>
  )
}

export default CategoryItem;