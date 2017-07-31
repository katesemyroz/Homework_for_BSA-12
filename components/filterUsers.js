import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/mainComponentActions";
import './css/filterUsers.css';

class FilterUsers extends Component{
    constructor(){
        super();
        this.search = this.search.bind(this);
    }

    search(){
        var inp = (this.refs.Search).value.toLowerCase();
        var searchedUsers = [];
        const allUsers = this.props.stateFromReducer.allUsers;
        if (allUsers.length > 0){
            for (var user in allUsers){
                if ((allUsers[user].value.toLowerCase()).indexOf(inp) != -1){
                    searchedUsers.push(allUsers[user]);
                }
            }   
        }
        this.props.searchUsers(searchedUsers);
    }

    render() {
        return (
            <div id="filterUsers">
                <input placeholder="Search..." ref="Search" onInput={this.search}></input>
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
const FilterUsersConnected = connect(mapStateToProps, mapDispatchToProps)(FilterUsers);

export default FilterUsersConnected