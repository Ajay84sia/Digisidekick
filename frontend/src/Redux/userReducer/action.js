import axios from "axios"
import { API_FAILED, API_GET_SUCCESS, API_REQUEST } from "./actionTypes"


let baseUrl = "https://grumpy-tuna-flannel-shirt.cyclic.app"



export const getDataFun = () => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/users`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        console.log(res)
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}


export const getAgeSortFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/users/sort?age=${value}`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

export const getGenderFilterFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/users/filter?gender=${value}`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}


export const getNameSearchFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/users/search?search=${value}`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}