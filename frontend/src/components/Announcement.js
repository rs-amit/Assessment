import React from 'react'
import styled from "styled-components"

const AnnouncementContainer = styled.div`
  display:flex;
  justify-content:center;
  color:${(props)=>props.textColor};
  padding:15px;
  font-weight: 700;
  background-color:${(props)=>props.bgColor};
  /* box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.75); */

`

function Announcement({offerMessage, bgColor, textColor}) {
  return (
    <AnnouncementContainer bgColor={bgColor} textColor={textColor}> {offerMessage} </AnnouncementContainer>
  )
}

export default Announcement
