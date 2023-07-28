import {  API_FAILED, API_GET_SUCCESS, API_REQUEST } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    usersData: [],
    myUsersData: [],
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case API_REQUEST:
            return { ...state, isLoading: true }

        case API_GET_SUCCESS:
            return { ...state, isLoading: false, usersData: [...payload] }

        case API_FAILED:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }
}