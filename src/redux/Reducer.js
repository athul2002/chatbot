import { AGE,NAMES } from "./constants";

export const botReducer=(state={name:{},age:{}},action)=>{
    switch(action.type){
        case AGE:
            return{
                ...state,
                age:action.ages
            }
        case NAMES:
            return{
                ...state,
                name:action.names
            }
        default:
            return state;
    }
}