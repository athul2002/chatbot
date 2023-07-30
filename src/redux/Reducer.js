import { AGE,NAMES } from "./constants";

export const botReducer=(state={name:[],age:[]},action)=>{
    // console.log(action.payload)
    console.log(state)
    switch(action.type){
        case AGE:
            return{
                ...state,
                age:[...state.age,action.ages]
            }
        case NAMES:
            return{
                
                ...state,
                name:[...state.name,action.names]
            }
        default:
            return state;
    }
}