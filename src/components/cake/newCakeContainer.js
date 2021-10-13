import React, {useState} from 'react';
import {buyCake} from "./cake";
import {decrement} from "./cake/actions";
import  {connect} from "react-redux";

function NewCakeContainer (props) {
    const[number,setNumber] = useState(1)
    return ( <div>
        <h2>NO of Cakes:{props.noOfCakes}</h2>
        <input type='text' value={number} onChange={event=>setNumber(event.target.value)} />
        <button onClick={()=>props.BUY_CAKE(number)}>Buy{number} Cakes</button>
        { props.noOfCakes>0? <button onClick={props.DECREMENT}>Remove Item</button>:null}
    </div> );
}

const mapStateToProps = state =>{
    return {
        noOfCakes : state.noOfCakes,
    }
};

const  mapDispatchToProps = (dispatch) =>{
    return {
        BUY_CAKE: (number) => dispatch(buyCake(number)),
        DECREMENT: ()=>dispatch(decrement())
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer) ;

