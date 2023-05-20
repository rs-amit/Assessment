import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import {  BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import { RiPhoneFill, RiMailUnreadFill } from "react-icons/ri";



const FooterContainer = styled.div`
  width: 100%;
  justify-content: space-around;
  color: #e6f4f1;
  background-color:#262626;
  border: 1px solid #262626;
`;

const FooterWrapper = styled.div`  
   display:flex;
   justify-content:space-around;
   margin:60px 20px;
`

const Icon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e6f4f1;
  margin-right:20px;
`;
const CompanyDisc = styled.div`
  font-size:14px;
  margin: 0 0 20px 0;
  color:#a5b2c7;
` 

const SubContainer = styled.div`
    max-width:500px;
`;

const TitleSUbContainer = styled.div`
    font-size:15px;
`;

const Title = styled.div`
   font-size:20px;
   margin:0 0 20px 0;
   
`

const SubContainerRow = styled.div`
  margin: 20px 0;
  font-weight: 600;
  display:flex;
  align-items:center;
`;

const FollowIconsContainer = styled.div`
    display:flex;
`
const SocialMediaIcons = styled.a`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e6f4f1;
    margin-right:20px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
`

function Footer({pathname}) {


  return (
    <FooterContainer >
      <FooterWrapper>
        <SubContainer>
          <Title> CONTACTS </Title>
          <SubContainerRow>
            <Icon>
              <HiLocationMarker color="#003044" size={25}/>
            </Icon>
            <TitleSUbContainer> Mumbai, Maharashtra </TitleSUbContainer>
          </SubContainerRow>

          <SubContainerRow>
            <Icon>
              <RiPhoneFill color="#003044" size={25}/>
            </Icon>
            <TitleSUbContainer> +91 9855654546</TitleSUbContainer>
          </SubContainerRow>

          <SubContainerRow>
            <Icon>
              <RiMailUnreadFill color="#003044" size={25}/>
            </Icon>
            <TitleSUbContainer> amitrs852852@gmail.com</TitleSUbContainer>
          </SubContainerRow>

        </SubContainer>

        <SubContainer>
          <Title> ABOUT THE COMPANY </Title>
          <CompanyDisc> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CompanyDisc>
          <CompanyDisc> testcompany.com </CompanyDisc>

        </SubContainer>

        <SubContainer>
          <Title> ONLINE SHOP </Title>
          <CompanyDisc>Smart Watch </CompanyDisc>
          <CompanyDisc>Wireless Earbuds </CompanyDisc>
          <CompanyDisc> Wireless headphones</CompanyDisc>
          <CompanyDisc> Wireless Speakers</CompanyDisc>
          <CompanyDisc> NeckBands</CompanyDisc>
        </SubContainer>

        <SubContainer>
          <Title> FOLLOW US </Title>
      
          <FollowIconsContainer>
            <SocialMediaIcons href = "https://github.com/rs-amit">
              <BsGithub color="#003044" size={25}/>
            </SocialMediaIcons>
            <SocialMediaIcons href = "https://www.linkedin.com/in/rs-amit/">
              <BsLinkedin color="#003044" size={25}/>
            </SocialMediaIcons>
            <SocialMediaIcons href = "#">
              <BsInstagram color="#003044" size={25}/>
            </SocialMediaIcons>
          </FollowIconsContainer>
   

        </SubContainer>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
