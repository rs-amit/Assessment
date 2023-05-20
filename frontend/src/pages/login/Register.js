import React,{useState} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PublicRequest } from "../../api/Api";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const RegisterContainer = styled.div`

   height: 100vh;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color:#e2f3f5;
`
const RegisterWrapper = styled.div`

   width:300px;
   padding:30px 20px;
   border-radius:5px;
   background-color:white;
   box-shadow: 0px 0px 24px -4px rgba(0,0,0,0.25);
   -webkit-box-shadow: 0px 0px 24px -4px rgba(0,0,0,0.25);
   -moz-box-shadow: 0px 0px 24px -4px rgba(0,0,0,0.25);
`

const RegisterForm = styled.form``

const InputsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  position:relative
`

const InputLabels = styled.label`
  margin:5px 0;
  font-size:18px;
`
const Input = styled.input`
  border:1px solid #003044;
  padding:10px;
  margin:5px 0;
  flex:1;
  font-size:17px;
`
const ShowPassword = styled.div`
  background-color:white;
  border:none;
  width:fit-content;
  font-size:10px;
  position:absolute;
  top:50px;
  right:10px;
`
const SubmitBtn = styled.button`
  width:100%;
  padding:10px 20px;
  margin:20px 0 10px 0;
  font-size:18px;
  background-color:#003044;
  border:none;
  color:white;
  &:disabled{
    cursor:not-allowed;
  }

  `

const AccountConfirmation = styled.form``


function Register() {
  const [ userName, setUserName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ isFetching, setIsfetching ] = useState(false)
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);


  const SubmitClickHandler=async(e)=>{
    e.preventDefault();
    setIsfetching(true)
    await PublicRequest.post("/auth/register", {
        username:userName,
        email:email,
        password:password,
    } ).then((response)=>{
        console.log(response.data)
        setUserName("")
        setEmail("")
        setPassword("")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your account has been saved',
            showConfirmButton: false,
            timer: 1500
          })          
        
    }).catch((error)=>{
        console.error(error)
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong, please try again later',
            showConfirmButton: false,
            timer: 1500
          })
    }).finally(()=>{
        setIsfetching(false)
    })
  }

  const isEmpty = () => {
    return !userName || !password || !email
   }

  const ShowPasswordToggle = () =>{
    if(showPasswordToggle){
      setShowPasswordToggle(false)
    }else{
      setShowPasswordToggle(true)
      
    }
  }

  return (
    <RegisterContainer>
         <RegisterWrapper>
           <RegisterForm onSubmit={SubmitClickHandler}>

               <InputsWrapper>
                  <InputLabels>username :</InputLabels>
                  <Input 
                    placeholder="username..."
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                  />
               </InputsWrapper>
               
               <InputsWrapper>
                  <InputLabels>email :</InputLabels>
                  <Input
                    placeholder="email..."
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
               </InputsWrapper>

               <InputsWrapper>
                  <InputLabels>password :</InputLabels>
                  <Input
                    placeholder="password..."
                    value={password}
                    type={showPasswordToggle ? "text" : "password"}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  
                 <ShowPassword onClick={ShowPasswordToggle}>{showPasswordToggle? "HIDE" :"SHOW"}</ShowPassword>
               </InputsWrapper>

               <SubmitBtn type="submit" disabled = {isFetching || isEmpty()} >{isFetching ? <ClipLoader color='white' size={15}/> :  "Register" }</SubmitBtn>
           </RegisterForm>
           <AccountConfirmation className="signup-Link">Do u have a Account..?<Link to="/login"> SignIn</Link></AccountConfirmation>
        </RegisterWrapper>
        
    </RegisterContainer>
  )
}

export default Register
