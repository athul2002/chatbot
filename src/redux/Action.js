import { AGE,NAMES } from "./constants";
export const addAge=(age)=>async(dispatch)=>{
        dispatch({
            type:AGE,
            ages:age
        });
}
export const addName=(name)=>async(dispatch)=>{
        dispatch({
            type:NAMES,
            names:name
        }); 
}