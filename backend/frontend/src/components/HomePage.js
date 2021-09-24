import React, { Component } from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // React Page Routing
        return <Router>
            <Switch>
                <Route exact path='/'><p>This is the Home Page.</p></Route>
                <Route path='/join' component={RoomJoinPage} />
                <Route path='/create' component={CreateRoomPage} />
                <Router path='/room/:roomCode' component={Room} />
            </Switch>
        </Router>;
    }
    
}