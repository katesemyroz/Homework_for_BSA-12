export function addUser(value, id, allUsers) {
    const newUser2 = {value, id};
    const action = {
        type: 'ADD_USER',
        id: id + 1,
        allUsers: [...allUsers, newUser2],
        searchMode: false
    };
    return action;
}

export function removeUser(value, allUsers) {
    allUsers.splice(value, 1);
    const newUsers = [...allUsers];
    const action = {
        type: 'REMOVE_USER',
        allUsers: newUsers
    };
    return action;
}

export function searchUsers(newListOfUsers) {
    const action = {
        type: 'SEARCH_USER',
        searchedUsers: newListOfUsers,
        searchMode: true
    };
    return action;
}  