import { combineReducers } from "redux";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";
import brandReducers from './brand.reducers';
import showroomReducers from './showroom.reducers';
import helmetReducers from './helmet.reducers'
import helmetbrandReducers from './helemt.brand.reducers'

const rootReducer = combineReducers({
  product: productReducers,
  category: categoryReducers,
  brand : brandReducers,
  showroom : showroomReducers,
  helmets : helmetReducers,
  helmetBrands : helmetbrandReducers

});
export default rootReducer;
