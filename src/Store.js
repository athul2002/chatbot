import {legacy_createStore as createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { botReducer } from "./redux/Reducer";
const reducer=combineReducers({
    detail:botReducer
});

let initialState={
    details:{
        name:localStorage.getItem("name")
        ? JSON.parse(localStorage.getItem("name"))
        : [],
        age:localStorage.getItem("age")
        ? JSON.parse(localStorage.getItem("age"))
        : [],
    },
    
}
const middleware=[thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
