import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('https://api.restful-api.dev/objects');
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data,
    });
    console.log("income"+response.data);
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
    console.log("failed");
  }
};

