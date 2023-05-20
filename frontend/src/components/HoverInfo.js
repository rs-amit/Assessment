import React from "react";
import styled from "styled-components";

const HoverInfoContainer = styled.div``;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 12px;
`;
const ProductInfoTitle = styled.div``;

const ProductInfoValue = styled.div`
  margin: 0 0 0 10px;
`;

const ProductDesc = styled.div`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
  text-align: start;
`;

const Title = styled.div`
  width: 200px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: flex-Start;
  padding: 10px 0;
  font-size: 14px;
`;

const InfoContainer = styled.div`
  width: 200px;
`;

function HoverInfo({ ProductData }) {
  return (
    <HoverInfoContainer>
      <Title> {ProductData.title} </Title>
      <InfoContainer>
        <ProductDesc> {ProductData.disc} </ProductDesc>
        <Info>
          <ProductInfoTitle> Price : </ProductInfoTitle>
          <ProductInfoValue> ₹ {ProductData.price} </ProductInfoValue>
        </Info>
      </InfoContainer>
    </HoverInfoContainer>
  );
}

export default HoverInfo;
