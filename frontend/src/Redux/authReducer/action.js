import axios from "axios"
import { SIGNIN_FAILED, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

let baseUrl = "https://grumpy-tuna-flannel-shirt.cyclic.app/"




export const SignupFun = (formData) => (dispatch) => {

    dispatch({ type: SIGNUP_REQUEST })

    return axios.post(`${baseUrl}/auth/register`, formData).then((res) => {
        dispatch({ type: SIGNUP_SUCCESS })
        localStorage.setItem("signupMsg", res.data.msg)
    }).catch((err) => {
        dispatch({ type: SIGNUP_FAILED })
    })
}

export const SigninFun = (formData) => (dispatch) => {

    dispatch({ type: SIGNIN_REQUEST })

    return axios.post(`${baseUrl}/auth/login`, formData).then((res) => {
        if (res.data.token) {
            dispatch({ type: SIGNIN_SUCCESS, payload: res.data.token })
            localStorage.setItem("signinMsg", res.data.msg)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("userName", res.data.name)
        }
    }).catch((err) => {
        dispatch({ type: SIGNIN_FAILED })
    })
}

export const SignoutFun = () => (dispatch) => {

    dispatch({ type: SIGNOUT_REQUEST })

    dispatch({ type: SIGNOUT_SUCCESS })
    localStorage.removeItem("signinMsg")
    localStorage.removeItem("token")
    localStorage.removeItem("dealerName")

}