import { actionTypes } from './actionsTypes'
import * as FUNCTION from '../../services/userService'
import _ from 'lodash'
import Toast from 'react-native-toast-message'

export const getAllPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionTypes.PROCESS_ACTION })
            //call api
            let res = await FUNCTION.fetchAllPostData()
            if (res && res.errCode === 0)
                dispatch({
                    type: actionTypes.FETCH_ALL_POSTS_SUCCESS,
                    payload: res.data
                })
            else
                dispatch({
                    type: actionTypes.PROCESS_ACTION_FAILED
                })
        } catch (e) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: "Fetch data posts failed!",
                visibilityTime: 2000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
            })
            dispatch({
                type: actionTypes.PROCESS_ACTION_FAILED
            })
        }
    }
}

export const editPost = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionTypes.PROCESS_ACTION })
            //call api
            let res = await FUNCTION.updatePost(data)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_POST_SUCCESS,
                    payload: res.data
                })
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Successfully',
                    text2: res.message,
                    visibilityTime: 2000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
            else {
                dispatch({
                    type: actionTypes.PROCESS_ACTION_FAILED
                })
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: res.errMessage,
                    visibilityTime: 2000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
        } catch (e) {

            dispatch({
                type: actionTypes.PROCESS_ACTION_FAILED
            })
        }
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionTypes.PROCESS_ACTION })
            //call api
            let res = await FUNCTION.deletePost(id)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_POST_SUCCESS
                })
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Successfully',
                    text2: res.message,
                    visibilityTime: 2000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
            else {
                dispatch({
                    type: actionTypes.PROCESS_ACTION_FAILED
                })
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: res.errMessage,
                    visibilityTime: 2000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
        } catch (e) {

            dispatch({
                type: actionTypes.PROCESS_ACTION_FAILED
            })
        }
    }
}

export const createPost = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionTypes.PROCESS_ACTION })
            //call api
            let res = await FUNCTION.createPost(data)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_POST_SUCCESS
                })
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Successfully',
                    text2: res.message,
                    visibilityTime: 2000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
            else {
                dispatch({
                    type: actionTypes.PROCESS_ACTION_FAILED
                })
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Error',
                    text2: res.errMessage,
                    visibilityTime: 2000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
        } catch (e) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: res.errMessage,
                visibilityTime: 2000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
            })
            dispatch({
                type: actionTypes.PROCESS_ACTION_FAILED
            })
        }
    }
}