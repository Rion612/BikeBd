import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import brandReducers from './brand.reducers';
import showroomReducers from './showroom.reducers';
import helmetReducers from './helmet.reducers'
import helmetbrandReducers from './helemt.brand.reducers'
import newsReducers from "./news.reducers";
import bikesReducers from "./bikes.reducers"

const rootReducer = combineReducers({
  category: categoryReducers,
  brand : brandReducers,
  showroom : showroomReducers,
  helmets : helmetReducers,
  helmetBrands : helmetbrandReducers,
  news : newsReducers,
  bikes: bikesReducers

});
export default rootReducer;
