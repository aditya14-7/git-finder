import { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

const AlertState = props => {
   const initialState = {
    alert: null
   };

   const [state, dispatch] = useReducer(AlertReducer, initialState);

    /**
     * Set Alert via reducer
     * @param msg string
     * @param type string
     */
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {
                msg: msg,
                type: type
            }
        });
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT
            })
        }, 3000);
    }

    return (<AlertContext.Provider
        value={{
            alert: state.alert,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>);
}
export default AlertState;