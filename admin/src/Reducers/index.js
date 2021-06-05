import { combineReducers } from "redux";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";
import brandReducers from './brand.reducers';
import showroomReducers from './showroom.reducers';
import helmetReducers from './helmet.reducers'

const rootReducer = combineReducers({
  product: productReducers,
  category: categoryReducers,
  brand : brandReducers,
  showroom : showroomReducers,
  helmets : helmetReducers

});
export default rootReducer;
