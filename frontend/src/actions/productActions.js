import axios from 'axios';
import {
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  // Since requesting data from server is async we will be using thunk
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      error:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  // Since requesting data from server is async we will be using thunk
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      error:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
