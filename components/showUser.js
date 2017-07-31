import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/mainComponentActions";
import './css/showUser.css';

class ShowUser extends Component{
	constructor(props){
        super(props);
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
    }

    handleRemoveUser(event){
        this.props.removeUser(this.props.id, this.props.stateFromReducer.allUsers);
    }

    render() {
        return (
            <div className="user">
                <p>{this.props.stateFromReducer.allUsers[this.props.id].value}</p>
                <button onClick={this.handleRemoveUser}>Remove User</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const ShowUserConnected = connect(mapStateToProps, mapDispatchToProps)(ShowUser);

export default ShowUserConnected