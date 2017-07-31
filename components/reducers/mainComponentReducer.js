const initialState = {
            id: 0,
            allUsers : [],
            searchedUsers: [],
            searchMode: false
}  

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            const  {newUserName, id, newUser, allUsers, searchMode} = action;
            // console.log("state:");
            // console.log(state);
            return Object.assign({}, state, {
                id,
                allUsers ,
                searchMode             
            })
        }
        case 'REMOVE_USER': {
            const { allUsers } = action
            return Object.assign({}, state, {
                allUsers
            })               
        }
        case 'SEARCH_USER': {
            const { searchedUsers, searchMode } = action
            return Object.assign({}, state, {
                searchedUsers,
                searchMode
            })               
        }
        default: {
            return state;        
        }
    }
}
