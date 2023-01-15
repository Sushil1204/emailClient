import emailReducer from "./email";
import emailFilter from "./filter";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    emailReducer,
    emailFilter
})


export default rootReducer;