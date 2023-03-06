import { FILTER_ITEMS_BY_PRICE, FILTER_ITEMS_BY_PRICE_FAIL, FILTER_ITEMS_BY_PRICE_SUCCESS } from "../constants/catalogConstants";

export const filteredListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case FILTER_ITEMS_BY_PRICE:
      return { loading: true };
    case FILTER_ITEMS_BY_PRICE_SUCCESS:
      return { loading: false, products: action.payload };
    case FILTER_ITEMS_BY_PRICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
