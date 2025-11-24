const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_POST_MESSAGE_ACTION = 'UPDATE-POST-MESSAGE';

let initialState = {
    postsData: [
        {id: 1, title: "My first react post!!!", likesCount: '99'},
        {id: 2, title: "My second react post!!!", likesCount: '5'},
        {id: 3, title: "My react post!!!", likesCount: '24'},
    ],
    postMessage: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_ACTION:
            return {
                ...state,
                postsData: [...state.postsData, {id: 4, title: state.postMessage, likesCount: '0'}],
                postMessage: ''
            }
        case UPDATE_POST_MESSAGE_ACTION:
            return {
                ...state,
                postMessage: action.postMessage
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_ACTION})
export const updatePostMessageActionCreator = (text) =>
    ({type: UPDATE_POST_MESSAGE_ACTION, postMessage: text})

export default profileReducer;