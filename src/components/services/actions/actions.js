import axios from "axios"
import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS, TODO_URL } from "../constants/constants"

export const getTodoRequset = () => async(dispatch) =>{
    dispatch({type : GET_TODO_REQUEST});
    try{
        const request = await axios.get(TODO_URL);
        dispatch({type : GET_TODO_SUCCESS,payload : request.data});
    }catch(error){
        dispatch({type : GET_TODO_FAILED, payload : error.message});
    }
}
