import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { LoginHandler } from "../../Redux/ApiCalls";
import Swal from "sweetalert2";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2f3f5;
`;
const LoginWrapper = styled.div`
  //   border:1px solid #003044;
  width: 300px;
  padding: 30px 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.25);
`;

const LoginForm = styled.form``;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
`;

const InputLabels = styled.label`
  margin: 5px 0;
  font-size: 18px;
`;
const Input = styled.input`
  border: 1px solid #003044;
  padding: 10px;
  margin: 5px 0;
  flex: 1;
  font-size: 17px;
`;
const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin: 20px 0 10px 0;
  font-size: 18px;
  background-color: #003044;
  border: none;
  color: white;
  &:disabled{
    cursor:not-allowed;
  }
`;

const Button = styled.button`
  margin: 0 0 0 5px;
  font-size: 12px;
  border:1px solid #dee1ec;
  padding: 5px 10px;
  border-radius:10px;

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



const AccountConfirmation = styled.div`
  font-size:12px;
  margin:10px 0 0 0;
`;

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, error, isFetching } = useSelector((state) => state.user);

  const isEmpty = () => {
    return !userName || !password 
   }

  useEffect(() => {
    if (currentUser) {
      setPassword("");
      setUserName("");
      navigate("/");
    }
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong, please try again later",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [currentUser, error]);


  const getUserHandler = async (e) => {
    e.preventDefault();
    LoginHandler(dispatch, { userName, password });
  };

  const LoginGuest = () =>{
    setUserName("admin")
    setPassword("admin23eww")
  }

  const ShowPasswordToggle = () =>{
    if(showPasswordToggle){
      setShowPasswordToggle(false)
    }else{
      setShowPasswordToggle(true)
      
    }
  }

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginForm onSubmit={getUserHandler}>
          <InputsWrapper>
            <InputLabels>username </InputLabels>
            <Input
              placeholder="username..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputsWrapper>
          <InputsWrapper>
            <InputLabels>password </InputLabels>
            <Input
              placeholder="password..."
              type={showPasswordToggle ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ShowPassword onClick={ShowPasswordToggle}>{showPasswordToggle? "HIDE" :"SHOW"}</ShowPassword>
          </InputsWrapper>

          <SubmitBtn type="submit" disabled = {isFetching || isEmpty()}>
            {isFetching ? <ClipLoader color="white" size={15} /> : "Login"}
          </SubmitBtn>
        </LoginForm>
        <AccountConfirmation>
          DO YOU HAVE A ACCOUNT? <Link to="/register"> SignUp</Link>
        </AccountConfirmation>

        <AccountConfirmation type="guest">
            LOGIN AS A GUEST <Button onClick={()=>LoginGuest()}> GUEST </Button>
        </AccountConfirmation>

      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
