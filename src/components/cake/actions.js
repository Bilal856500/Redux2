
import  {BUY_CAKE} from "./constants";
import {DECREMENT} from "./constants";

export  const buyCake = (number=1)=>{
    return {
        type:BUY_CAKE,
    }
}


export  const decrement = ()=>{
    return {
        type:DECREMENT,
    }
}
