import { FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_SUCCESS } from "../actions/fetchapiaction";
const initialState = [{items:[],error:null}]

const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, items:action.payload};
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error:action.payload };
    default:
      return state;
  }
};

export default ApiReducer;
