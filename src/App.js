import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";


function App() {
    return (
        <Switch>
            <Route exact path={["/home","/"]} component={Home}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/signup"} component={Register}/>
        </Switch>
    );
}

export default App;
