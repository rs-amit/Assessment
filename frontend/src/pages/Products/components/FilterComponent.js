import React,{useState} from 'react';
import styled from "styled-components";
const ModalContainer = styled.div`
  border:1ps solid black;
`
const ModalWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
`

const CategoryWrapper = styled.button`
  margin:20px;
  cursor:pointer;
  background-color:white;
  border:none
`
const Image = styled.img`
  width:160px;
`
const CategoryTitle = styled.div`
  text-align:center;
`


function FilterComponent({categoryList, setCategoryName}) {

  return (
    <ModalContainer>
      <ModalWrapper>
        {
            categoryList.map((category)=>(
                <CategoryWrapper onClick={()=>setCategoryName(category.category)}>
                     <Image src={category.image}/>
                     <CategoryTitle>{category.title} </CategoryTitle>
                </CategoryWrapper>
            ))
        }
      </ModalWrapper>
    </ModalContainer>
  )
}

export default FilterComponent
