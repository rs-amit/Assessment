import React from 'react'
import styled from "styled-components"
import CategoryItem from './CategoryItem'

const CategoryContainer = styled.div`
  max-width: 1500px;
  margin: 20px auto;
  display:grid;
  padding: 0 15px;
  grid-template-columns:repeat(6, 1fr);
  @media screen and (max-width:1200px){
    grid-template-columns:repeat(2, 1fr)
  }
  @media screen and (max-width:860px){
   grid-template-columns:repeat(1, 1fr)
 }

`


function Categories({categoryList}) {
  return (
    <CategoryContainer>
        {
            categoryList.map((item)=>{
              return  <CategoryItem key={item.id} item={item}/>
            })
        }
    </CategoryContainer>
  )
}

export default Categories
