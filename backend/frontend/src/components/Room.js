import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
          votesToSkip: 2,
          guestCanPause: false,
          isHost: false,
        };
        let params = useParams();
        this.roomCode = this.props.match.params.roomCode;
    }

    render() {
        return (
        <div>
            <h2>{params.roomCode}</h2>
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest can Pause: {this.state.guestCanPause}</p>
            <p>Host: {this.state.isHost}</p>
        </div>
        );
    }
}