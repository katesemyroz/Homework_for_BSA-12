const initialState = {
            id: 0,
            allUsers : [],
            searchedUsers: [],
            searchMode: false
}  

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            var newState = Object.assign({}, state); 
            newState.id = action.id;
            newState.allUsers = action.allUsers;
            newState.searchMode = action.searchMode;
            return newState;
        }
        case 'REMOVE_USER': {
            var newState = Object.assign({}, state); 
            newState.allUsers = action.allUsers;
            return newState;              
        }
        case 'SEARCH_USER': {
            var newState = Object.assign({}, state); 
            newState.searchedUsers = action.searchedUsers;
            newState.searchMode = action.searchMode;
            return newState;              
        }
        default: {
            return state;        
        }
    }
}
