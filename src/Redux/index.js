import { combineReducers } from "redux";
import { appReducer } from "./Product/Reducer";


const reducers = combineReducers({
    app:appReducer
})

export default reducers;