import { combineReducers } from "redux";
import buildingsReducer from "./buildingsReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  //here all the reducers
  buildings: buildingsReducer,
  modal: modalReducer,
});

export default rootReducer;
