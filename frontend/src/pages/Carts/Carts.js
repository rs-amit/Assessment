import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Swal from "sweetalert2"

// import { useNavigate } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";
// import logo from "../../asserts/noline.png"
// import { UserRequest } from "../../api/Api";
// const KEY = "pk_test_51MvdiPSBgvBmTMe9cMhJGOV5OwRZmKbeKczr3cU8GvnzfFaeHWXt9EyoD4qaXHNMo9hL8hWixBuSTL9t3YwB3IW900OmxnotaD";

const Container = styled.div`
  // border:1px solid black
`;

const CartContainer = styled.div`
  margin: 0 20px;
`;

const CartTitle = styled.div`
  // border:1px solid black;
  text-align: center;
  padding: 10px;
  font-size: 40px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #dee1ec;
  margin: 20px 0;
  padding: 20px 0;
`;
const TopButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => (props.type === "filled" ? "white" : "#262626")};
  border: ${(props) => (props.type === "filled" ? "2px solid black" : "none")};
  color: ${(props) => (props.type === "filled" ? "black" : "white")};
  width: ${(props) => props.type === "summary" && "100%"};
  cursor: pointer;
`;
const TopTexts = styled.div`
  display: flex;
`;
const TopText = styled.div`
  margin: 0 10px;
  text-decoration: underline;
  font-size: 20px;
`;

const CartWrapper = styled.div`
  margin: 20px 10px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  padding: 20px 0;
`;
const CartList = styled.div`
  flex: 2;
  height: 62vh;
  overflow-y: auto;
`;
const Summary = styled.div`
  flex: 1;
  border-left: ${(props) => (props.empty ? "none" : "1px solid #dee1ec")};
  max-width: 400px;
`;
const SummaryWrap = styled.div`
  border: 1px solid #dee1ec;
  max-width: 250px;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;
const SummaryTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #dee1ec;
  padding: 10px 0;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: ${(props) => (props.type === "total" ? "10px 0" : "5px 0")};
`;
const SummaryItemText = styled.div`
  font-size: ${(props) => (props.type === "total" ? "18px" : "16px")};
`;
const SummaryItemPrice = styled.div`
  font-size: ${(props) => (props.type === "total" ? "18px" : "16px")};
`;

const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 400px);
  font-size: 25px;
  background-color: #dee1ec;
  border-radius: 10px;
`;

function Carts() {
  const cart = useSelector((state) => state.cart);
  const { products, quantity, total } = cart;

  const makePaymentRequest = () =>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'upcoming feature',
    })
  }


  // const [ stripeToken, setStripeToken ] = useState()
  // const onToken = (token)=>{
  //   setStripeToken(token)
  // }
  // const makePaymentRequest = async()=>{
  //   await UserRequest.post('/checkout/payment',{
  //      tokenId:stripeToken.id,
  //      amount:500,
  //   }).then((res)=>{
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: "Your payment has been done successFully",
  //       icon: 'success',
  //       // showCancelButton: true,
  //       // confirmButtonColor: '#3085d6',
  //       // cancelButtonColor: '#d33',
  //       // confirmButtonText: 'Yes, delete it!',
  //     })
  
  //   }).catch((error)=>{
  //     console.error(error)
  //   })
  // }
  // useEffect(()=>{
  //   stripeToken && makePaymentRequest()
  // },[stripeToken])


  return (
    <>
    <Header/>
    <Container>
      <Announcement
        offerMessage="Super Deal! Free Shopping on Order Over $100"
        bgColor="#FFD81C"
        textColor="black"
      />
      <CartContainer>
        <CartTitle> YOUR BASKET </CartTitle>
        <Top>
          <Link to="/">
            <TopButton type="filled"> CONTINUE SHOPPING </TopButton>
          </Link>
          <TopTexts>
            <TopText> Number of items in your basket ({quantity}) </TopText>
          </TopTexts>
          <TopButton onClick={makePaymentRequest}> CHECKOUT NOW </TopButton>
        </Top>
        <CartWrapper>
          <CartList>
            {products.length ? (
              products.map((product) => (
                <Cart key={product.title} cart={product} />
              ))
            ) : (
              <EmptyCart>
                Your cart is empty{" "}
                <Link to="/products" style={{ margin: "0 0 0 10px" }}>
                  Go Back
                </Link>
              </EmptyCart>
            )}
          </CartList>
          <Summary empty={!products.length ? true : false}>
            <SummaryWrap>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText> SubTotal </SummaryItemText>
                <SummaryItemPrice> ₹ {total} </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText> Estimated Shipping </SummaryItemText>
                <SummaryItemPrice> ₹ 200 </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText> Shipping Discount </SummaryItemText>
                <SummaryItemPrice> ₹ 100 </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText type="total">Order Total </SummaryItemText>
                <SummaryItemPrice type="total">
                  ₹ {total + 200 - 100}{" "}
                </SummaryItemPrice>
              </SummaryItem>
              {/* <StripeCheckout
                  name="my Bazaar"
                  image={logo}
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
              >
                <TopButton type="summary"> CHECKOUT NOW </TopButton>
              </StripeCheckout> */}
              <TopButton type="summary" onClick={makePaymentRequest}> CHECKOUT NOW </TopButton>
            </SummaryWrap>
          </Summary>
        </CartWrapper>
      </CartContainer>
    </Container>
    <Footer />
    </>
  );
}

export default Carts;
