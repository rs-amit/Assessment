import { PublicRequest } from "../api/Api";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";


export const LoginHandler = async(dispatch, user)=>{
    dispatch(loginStart())
    await PublicRequest.post("/auth/login", {
        username: user.userName,
        loginPassword:user.password
    } ).then((response)=>{
        dispatch(loginSuccess(response.data.user))
    }).catch((error)=>{
        console.error(error)
        dispatch(loginFailure())
    })

}