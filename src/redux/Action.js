// import { type } from "@testing-library/user-event/dist/type";
import { AGE,NAMES } from "./constants";


export const addAge=(age)=>async(dispatch)=>{
    
        dispatch({
            type:AGE,
            ages:age
        });
        localStorage.setItem("age", JSON.stringify(age));
}
export const addName=(name)=>async(dispatch)=>{
    // console.log(name)
        dispatch({
            type:NAMES,
            names:name
        });
        localStorage.setItem("name", JSON.stringify(name));
    
}