import { combineReducers } from "redux";
import users from "./users";
import promo from "./promo";
// import {promo} from './promo';

const reducers = combineReducers({
  users,
  promo
});

export default reducers;
