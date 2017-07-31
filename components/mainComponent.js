import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/mainComponentActions";

import AddUser from './addUser';
import UsersList from './usersList';
import FilterUsers from './filterUsers';
import './css/mainComponent.css';

class MainComponent extends Component{
	constructor(){
        super();
    }

	render() {
        return (
            <div id="mainComponent">
                <AddUser/>
                <FilterUsers/>
                <hr></hr>
                <UsersList/>
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
const MainComponentConnected = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default MainComponentConnected