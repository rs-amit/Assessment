import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { PublicRequest } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import phonePay from "../../asserts/phonePay.png";
import MoonLoader from "react-spinners/MoonLoader";
import { addProduct } from "../../Redux/cartRedux";
import Header from "../../components/Header";
import Tooltip from "../../components/tooltip/Tooltip";
import Gpay from "../../asserts/Gpay.png";

const ProductDetailContainer = styled.div`
  height: calc(100vh - 400px);
  max-height: fit-content;
  display: flex;
`;
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductImgContainer = styled.div`
  max-width: 700px;
`;

const Image = styled.img`
  width: ${(props) => (props.type === "paymentIcons" ? "25px" : "100%")};
`;
const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductInfo = styled.div`
  max-width: 700px;
`;
const AboutProduct = styled.div``;
const ProductDetail = styled.div``;

const ProductDetailInfo = styled.div`
  border-bottom: 1px solid #dee1ec;
  padding-bottom: 20px;
`;
const ProductName = styled.div`
  margin: 10px 0;
  font-size: 22px;
  font-weight: 800;
  padding: 10px 0;
  border-bottom: 1px solid #dee1ec;
`;
const ProductDisc = styled.div`
  margin: 15px 0;
`;
const ProductRate = styled.div`
  margin: 10px 0;
  width: fit-content;
  display: flex;
  align-items: center;
`;
const Rating = styled.span`
  margin: 0 0 0 10px;
`;

const ProductDetailPaymentInfo = styled.div`
  border-top: 1px solid #dee1ec;
  display: flex;
  justify-content: space-between;
`;
const PaymentInfoLeft = styled.div`
  flex: 1;
  padding: 0 20px 0 0;
  margin: 10px 0;
`;
const PaymentInfoRight = styled.div`
  flex: 1;
  padding: 0 0 0 20px;
  margin: 10px 0;
  border-left: 1px solid #dee1ec;
`;
const ProductPrice = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
`;

const ProductStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  margin: 10px 0;
`;

const ProductColor = styled.div`
  display: flex;
  align-items:center;
  margin: 10px 0;
`;
const ProductColorTitle = styled.div``;
const ColorList = styled.div`
  display: flex;
`;
const Color = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const PaymentOffer = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: #e2f3f5;
  padding: 0 15px;
`;

const PaymentOfferText = styled.div`
  margin: 10px 0;
`;
const PaymentOfferIcons = styled.div`
  margin: 10px 0;
  display: flex;
`;

// ----------------common------------------------------

const ProductInfoTitle = styled.div`
  font-weight: 600;
`;
const ProductInfoValue = styled.div`
  margin: 0 0 0 10px;
`;
const Loader = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  padding:20px;
  justify-content: center;
`;
const AlertMessage = styled.div`
   font-size: 13px;
   padding: 0 10px;
`
// ----------------common------------------------------

const ProductQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  margin: 15px 0;
`;

const AddToCartBtn = styled.button`
  border: 2px solid black;
  background-color: white;
  padding: 10px 15px;
  margin: 10px 0;
`;

function ProductDetails() {
  const [productDetail, setProductDetail] = useState();
  const [loadarForProductDetail, setLoaderForProductDetail] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [showAltMsg, setShowAltMsg] = useState(false);

  const cart = useSelector((state)=>state.cart)
  const {products} = cart;


  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const GetProductDetails = async () => {
    setLoaderForProductDetail(true);
    await PublicRequest.get(`/product/find/${pathname.split("/")[2]}`)
      .then((res) => {
        setProductDetail(res.data.product);
        setLoaderForProductDetail(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (pathname.split("/")[2]) {
      GetProductDetails();
    }
  }, [pathname.split("/")[2]]);

  const AddToCartHandler = async (productDetail) => {
    if(selectedColor){
      const {catagories, colors, disc, ...productData } = productDetail;
      dispatch(
        addProduct({
          ...productData,
          color: selectedColor,
          quantity: quantity,
          totalPrice: productDetail.price * quantity,
        })
      );
    }else{
      setShowAltMsg(true)
      setTimeout(()=>{
        setShowAltMsg(false)
      },[2000])
    }
  };


  return (
    <>
      <Header/>
      {loadarForProductDetail ? (
        <Loader>
          <MoonLoader color="#003044" size={40} />
        </Loader>
      ) : (
        <ProductDetailContainer>
          {productDetail ? (
            <>
              <LeftSection>
                <ProductImgContainer>
                  <Image src={productDetail.img} />
                </ProductImgContainer>
              </LeftSection>
              <RightSection>
                <ProductInfo>
                  <AboutProduct>
                    <ProductDetail>
                      <ProductDetailInfo>
                        <ProductName>{productDetail.title}</ProductName>
                        <ProductDisc>{productDetail.disc}</ProductDisc>
                        {productDetail.rating && (
                          <ProductRate>
                            <BsFillStarFill color="#21e6c1" />
                            <Rating> {productDetail.rating} </Rating>
                          </ProductRate>
                        )}
                      </ProductDetailInfo>

                      <ProductDetailPaymentInfo>
                        <PaymentInfoLeft>
                          <ProductColor>
                            <ProductColorTitle> Colors : </ProductColorTitle>
                            <Tooltip tooltipChildren={showAltMsg && <AlertMessage> Please Select Color </AlertMessage>} position="bottom" background="003044" showTooltip={showAltMsg}>
                              <ColorList>
                                {productDetail.colors.map((color) => (
                                  <Color
                                    color={color}
                                    onClick={() => setSelectedColor(color)}
                                  />
                                ))}
                              </ColorList>
                            </Tooltip>
                          </ProductColor>

                          <PaymentOffer>
                            <PaymentOfferText>
                              {" "}
                              ₹15 Extra Discount on UPI{" "}
                            </PaymentOfferText>
                            <PaymentOfferIcons>
                              <Image src={phonePay} type="paymentIcons" />
                              <Image src={Gpay} type="paymentIcons" />
                            </PaymentOfferIcons>
                          </PaymentOffer>
                        </PaymentInfoLeft>

                        <PaymentInfoRight>
                          <ProductPrice>
                            <ProductInfoTitle>Sale Price :</ProductInfoTitle>
                            <ProductInfoValue>
                              {" "}
                              ₹ {productDetail.price}{" "}
                            </ProductInfoValue>
                          </ProductPrice>

                          <ProductQuantity>
                            <ProductInfoTitle>Quantity : </ProductInfoTitle>
                            <select
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(Number(e.target.value))
                              }
                            >
                              {[
                                ...Array(productDetail.countInStock).keys(),
                              ].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </ProductQuantity>

                          <ProductStatus>
                            <ProductInfoTitle> Status: </ProductInfoTitle>
                            <ProductInfoValue>
                              {" "}
                              {productDetail.countInStock > 0
                                ? "In Stock"
                                : "Out Of Stock"}{" "}
                            </ProductInfoValue>
                          </ProductStatus>

                          <AddToCartBtn
                            onClick={() => AddToCartHandler(productDetail)}
                          >
                            ADD TOO CART
                          </AddToCartBtn>
                        </PaymentInfoRight>
                      </ProductDetailPaymentInfo>
                    </ProductDetail>
                  </AboutProduct>
                </ProductInfo>
              </RightSection>
            </>
          ) : (
            <div> no data</div>
          )}
        </ProductDetailContainer>
      )}

      <Footer />
    </>
  );
}

export default ProductDetails;
