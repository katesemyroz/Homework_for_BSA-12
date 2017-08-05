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
        this.props.removeUser(this.props.id, this.props.allUsers);
    }

    render() {
        var listOfUsers = [];
        if (this.props.searchMode)
            listOfUsers = this.props.searchedUsers;
        else
            listOfUsers = this.props.allUsers;            
        return (
            <div className="user">
                <p>{listOfUsers[this.props.id].value}</p>
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
        allUsers: state.allUsers,
        searchMode: state.searchMode,
        searchedUsers: state.searchedUsers
    };
}
const ShowUserConnected = connect(mapStateToProps, mapDispatchToProps)(ShowUser);

export default ShowUserConnected