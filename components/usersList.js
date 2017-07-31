import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/mainComponentActions";
import ShowUser from './showUser';
import './css/usersList.css';

class UsersList extends Component{

	constructor(){
        super();
    }

    render() {
        const searchMode = this.props.stateFromReducer.searchMode;
        var allUsers;
        if (!searchMode)
    	   allUsers = this.props.stateFromReducer.allUsers;
        else
            allUsers = this.props.stateFromReducer.searchedUsers;
        return (
        	<div id="list">
                { allUsers.map( (elem, index, allUsers) => {
                    return <ShowUser key={elem.id} id={index}/>
                })}
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

const UsersListConnected = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListConnected