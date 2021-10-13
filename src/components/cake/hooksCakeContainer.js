import React from 'react';
import  {useSelector,useDispatch} from "react-redux";
import {buyCake} from "./actions";
import {decrement} from "./actions";

const HooksCakeContainer = () => {
   const num =  useSelector(state => state.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of Items:{num}</h2>
            <button onClick={()=>dispatch(buyCake())}>ADD Items</button>
            {num >0? <button onClick={()=>dispatch(decrement())}>Remove Items</button>:null}
        </div>
    );
};

export default HooksCakeContainer;