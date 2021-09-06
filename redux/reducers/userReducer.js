import { actionTypes } from '../actions/actionsTypes'

const initUserState = {
    isLoading: false,
    allPost: []
}

const UserReducer = (state = initUserState, action) => {
    switch (action.type) {
        case actionTypes.PROCESS_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                allPost: action.payload,
                isLoading: false
            }
        case actionTypes.CREATE_POST_SUCCESS:
        case actionTypes.DELETE_POST_SUCCESS:
        case actionTypes.EDIT_POST_SUCCESS:
        case actionTypes.PROCESS_ACTION_FAILED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default UserReducer