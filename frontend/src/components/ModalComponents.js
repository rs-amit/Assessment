import React from 'react'
import Modal from "react-modal"


function ModalComponent({isOpen=true, callback, children, contentClasses}) {
  return (
    <Modal
    isOpen={isOpen}
    shouldCloseOnOverlayClick
    onRequestClose={callback}
    className={contentClasses}
    style={
     {  overlay:{
           backgroundColor: "rgba(0,0,0,0.25)",
           zIndex:10,
           position:"fixed",
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
       },
       content:{
           width:"fit-content",
           height:"fit-content",
           position:"absolute",
           top:0,
           bottom:0,
           margin:"auto",
       }
     }
    }
    
    >
    {children}
    </Modal>
  )
}

export default ModalComponent


