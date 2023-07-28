import axios from "axios"
import { API_DELETE_MY_SUCCESS, API_FAILED, API_GET_MY_SUCCESS, API_GET_SUCCESS, API_POST_SUCCESS, API_REQUEST } from "./actionTypes"


let baseUrl = "https://grumpy-tuna-flannel-shirt.cyclic.app"



export const getDataFun = () => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/users`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        // console.log(res)
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}


export const getMyDataFun = () => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/users/self`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_GET_MY_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}


export const getAgeSortFun = (value) => (dispatch) => {

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


export const deleteMyDataFun = (id) => (dispatch) => {


    dispatch({ type: API_REQUEST })

    return axios.delete(`${baseUrl}/users/delete/${id}`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_DELETE_MY_SUCCESS })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

export const addDataFun = (formData) => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.post(`${baseUrl}/users`, formData, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_POST_SUCCESS })
        localStorage.setItem("marketmsg", res.data.msg);
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}