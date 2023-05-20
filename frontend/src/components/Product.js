import React, { useState } from "react";
import styled from "styled-components";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import ModalComponent from "./ModalComponents";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Tooltip from "./tooltip/Tooltip";
import HoverInfo from "./HoverInfo";

const ProductInfo = styled.div`
  opacity: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`;
const ProductContainer = styled.div`
  aspect-ratio: 10/12;
  margin: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  border-radius:5px ;
  &:hover ${ProductInfo} {
    opacity: 1;
  }
`;
const ProductImage = styled.img`
  width: 100%;
`;

const ProductInfoIcons = styled.span`
  padding: 5px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 10px;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductInfoWrapper = styled.div`
  display: flex;
`;

const ProductDetailsWrapper = styled.div`
   border: 1px solid;
`

const PopularProductText = styled.span`
  background-color: transparent;
  font-weight: 600;
  font-size: 40px;
  transform: rotate(90deg);
  position: absolute;
  left: 0px;

  border: 1px solid black;
  color: white;
  opacity: 1;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

function Product({ ProductData }) {
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const showTooltip = true
  return (
    <>
      {ProductData && (
        <ProductContainer>
          <ProductImage src={ProductData.img} />
          <ProductInfo>
            <Tooltip
              tooltipChildren={<HoverInfo ProductData={ProductData} />}
              position="bottom"
              background="424242"
              showTooltip={showTooltip}
            >
              <ProductInfoWrapper>
                <Link
                  to="/carts"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ProductInfoIcons>
                    <FiShoppingCart size={22} />{" "}
                  </ProductInfoIcons>
                </Link>

                <Link
                  to={`/productDetails/${ProductData._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ProductInfoIcons>
                    <BiDetail size={22} />
                  </ProductInfoIcons>
                </Link>
              </ProductInfoWrapper>
            </Tooltip>
          </ProductInfo>
          <ProductDetailsWrapper>

          </ProductDetailsWrapper>
        </ProductContainer>
      )}
      {openProductDetail && (
        <ModalComponent callback={() => setOpenProductDetail(false)}>
          <ProductDetails />
        </ModalComponent>
      )}
    </>
  );
}

export default Product;
