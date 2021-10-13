import React  from 'react';
import {buyCake} from "./cake";
import {decrement} from "./cake/actions";
import  {connect} from "react-redux";

function CakeCounter (props) {
    return ( <div>
        <h2>NO of Items:{props.noOfCakes}</h2>
        <button onClick={props.BUY_CAKE}>ADD Item</button>
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
        BUY_CAKE: () => dispatch(buyCake()),
        DECREMENT: ()=>dispatch(decrement())
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (CakeCounter) ;

