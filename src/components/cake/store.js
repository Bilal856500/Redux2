
import  {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from "redux-logger/src";
import cakeReducer from "./cakeReducer";

const store = createStore(cakeReducer,composeWithDevTools(applyMiddleware(logger)));

export  default  store;