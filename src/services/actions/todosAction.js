import axios from 'axios';
import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED, TODOS_API } from '../constants/todosConstant';

export const getTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get(TODOS_API);
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({ type: GET_TODOS_FAILED, payload: error.message});
    }
}