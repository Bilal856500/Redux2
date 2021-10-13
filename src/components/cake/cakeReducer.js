
import {BUY_CAKE} from "./constants";
import {DECREMENT} from "./constants";

const initialState = {
    noOfCakes :0,
}

 const cakeReducer = (state=initialState,action)=>{
    switch (action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes+1
        }

        case DECREMENT : return  {
            ...state,
            noOfCakes: state.noOfCakes-1
        }
        default:return state
    }

}
export  default  cakeReducer;