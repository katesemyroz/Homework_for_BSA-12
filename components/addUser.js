import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/mainComponentActions";
import './css/addUser.css';

class AddUser extends Component{
    constructor(){
        super();
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    handleAddUser(event){
        this.addUser((this.refs.theInput).value);
    }

    addUser(newName) {
        if (newName != "")
            this.props.addUser(newName, this.props.stateFromReducer.id, this.props.stateFromReducer.allUsers);

    }

    render() {
        return (
            <div id="addUser">
                <input placeholder="Enter the name" ref="theInput"></input>
                <button onClick={this.handleAddUser}>Add User</button>
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
const AddUserConnected = connect(mapStateToProps, mapDispatchToProps)(AddUser);

export default AddUserConnected