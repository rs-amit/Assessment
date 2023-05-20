import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smartWatch from "../asserts/smartWatch.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  display: flex;
  /* aspect-ratio: 16/8; */
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 1s ease;
  &:hover {
    background-color: #FFFFFF;
    transform: scale(1.1);
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${(props) => props.bgColor};
`;

const ImgContainer = styled.div`
  width: 800px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoContainerWrapper = styled.div`
   max-width: 600px;
`;

const Title = styled.h1`
  margin: 20px 0 20px 0;
  font-size: 70px;
  font-weight: 600;
`;

 const Disc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color:#003044;
  cursor: pointer;
  color:white;
  border:none;

`;

function Slider({ bannerList }) {
  const [slideIndex, setCurrentSlideIndex] = useState(0);
  let slideInterval;

  const SlideClickHandler = (direction) => {
    if (direction === "left") {
      setCurrentSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : bannerList.length - 1
      );
    } else {
      setCurrentSlideIndex(
        slideIndex < bannerList.length - 1 ? slideIndex + 1 : 0
      );
    }
  };

  const AutoSlide = () => {
    slideInterval = setInterval(() => {
      SlideClickHandler("right");
    }, 4000);
  };

  useEffect(() => {
    AutoSlide();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => SlideClickHandler("left")}>
      <IoIosArrowBack size={30} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {bannerList.map((item) => (
          <Slide bgColor={item.bgColor}>
            <ImgContainer>
              <Image src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer> 
                 <InfoContainerWrapper>
                    <Title> SUMMER SAL</Title>
                    <Disc> DON'T COMPROMISE  STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS </Disc>
                    <Button> SHOP NOW </Button>
                 </InfoContainerWrapper>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => SlideClickHandler("right")}>
        <IoIosArrowForward size={30} />
      </Arrow>
    </Container>
  );
}

export default Slider;
