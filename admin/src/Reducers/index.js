import { combineReducers } from "redux";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";

const rootReducer = combineReducers({
  product: productReducers,
  category: categoryReducers,
});
export default rootReducer;
