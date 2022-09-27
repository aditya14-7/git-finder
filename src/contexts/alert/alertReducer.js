import { REMOVE_ALERT, SET_ALERT } from "../types";

const AlertReducer = (state, action) => {
    switch(action.type){
        case SET_ALERT:
            return {
                ...state,
                alert: {
                    msg: action.payload.msg,
                    type: action.payload.type
                }
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
}

export default AlertReducer;