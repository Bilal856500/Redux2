import CakeCounter from "./components/counterContainer";
import React from "react";
import { Provider } from "react-redux";
import store from "./components/cake/store";
import HooksCakeContainer from "./components/cake/hooksCakeContainer";

function App() {
    return ( <
        Provider store = { store } >
        <
        div className = "App" >
        <
        CakeCounter / >
        <
        HooksCakeContainer / >
        <
        /div> <
        /Provider>

    );
}

export default App;