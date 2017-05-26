import { combineReducers } from 'redux';
import navigationReducer from "./navigation_reducer";
import homeReducer from "./home_reducer";

const AppReducer = combineReducers({
  navigationReducer,
  homeReducer
});

export default AppReducer;