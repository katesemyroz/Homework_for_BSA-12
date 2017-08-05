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
        const searchMode = this.props.searchMode;
        var allUsers = [];
        if (!searchMode)
    	   allUsers = this.props.allUsers;
        else
            allUsers = this.props.searchedUsers;
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
        allUsers: state.allUsers,
        searchedUsers: state.searchedUsers,
        searchMode: state.searchMode
    };
}

const UsersListConnected = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListConnected