import React, { Component } from 'react';

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

export default MainComponent