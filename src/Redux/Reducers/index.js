import { combineReducers } from "redux";
import users from "./users";
import regis from "./regis";
import login from "./login";
import paginate from "./paginate";
import oneUser from "./getOne";
import postData from "./postData";


const reducers = combineReducers({
  users,regis,login, paginate, oneUser, postData
});

export default reducers;
