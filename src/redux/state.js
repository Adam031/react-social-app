import avatar1 from "../images/avatar.jpeg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";

const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_POST_MESSAGE_ACTION = 'UPDATE-POST-MESSAGE';
const SEND_MESSAGE_ACTION = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT_ACTION = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        dialogsPage: {
            dialogData: [
                {id: 1, name: "Byblik", avatar: avatar1},
                {id: 2, name: "Syslik", avatar: avatar2},
                {id: 3, name: "Barilka", avatar: avatar3},
                {id: 4, name: "Tyzik", avatar: avatar4}
            ],
            messageData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello!"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "Thanks, fine!"}
            ],
            newMessageText: ""
        },

        profilePage: {
            postsData: [
                {id: 1, title: "My first react post!!!", likesCount: '99'},
                {id: 2, title: "My second react post!!!", likesCount: '5'},
                {id: 3, title: "My react post!!!", likesCount: '24'},
            ],
            postMessage: ""
        },

        sidebar: {
            friends: [
                {id: 1, name: "Byblik", avatar: avatar1},
                {id: 2, name: "Syslik", avatar: avatar2},
                {id: 3, name: "Barilka", avatar: avatar3},
            ]
        }
    },
    _rerenderUI() {},

    subscribe(observer) {
        this._rerenderUI = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST_ACTION) {
            let post = {
                id: 4,
                title: this._state.profilePage.postMessage,
                likesCount: '0'
            }
            this._state.profilePage.postsData.push(post);
            this._state.profilePage.postMessage = '';
            this._rerenderUI(this._state);
        } else if (action.type === UPDATE_POST_MESSAGE_ACTION) {
            this._state.profilePage.postMessage = action.postMessage;
            this._rerenderUI(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT_ACTION) {
            this._state.dialogsPage.newMessageText = action.message;
            this._rerenderUI(this._state);
        } else if (action.type === SEND_MESSAGE_ACTION) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderUI(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_ACTION})
export const updatePostMessageActionCreator = (text) =>
    ({type: UPDATE_POST_MESSAGE_ACTION, postMessage: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE_ACTION})
export const updateMessageTextActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT_ACTION, message: text})

export default store;