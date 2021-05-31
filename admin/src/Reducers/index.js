import { combineReducers } from "redux";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";
import brandReducers from './brand.reducers';
import showroomReducers from './showroom.reducers'

const rootReducer = combineReducers({
  product: productReducers,
  category: categoryReducers,
  brand : brandReducers,
  showroom : showroomReducers

});
export default rootReducer;
