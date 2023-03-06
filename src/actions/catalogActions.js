import Axios from "axios";
import {
  FILTER_ITEMS_BY_PRICE,
  FILTER_ITEMS_BY_PRICE_FAIL,
  FILTER_ITEMS_BY_PRICE_SUCCESS,
} from "../constants/catalogConstants";

export const filterProduct = (model, price) => async (dispatch) => {
  dispatch({ type: FILTER_ITEMS_BY_PRICE, payload: model });
  try {

      const { data } = await Axios.get(`/api/products/catalog?model=${model}&price=${price}`);
      dispatch({ type: FILTER_ITEMS_BY_PRICE_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: FILTER_ITEMS_BY_PRICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
