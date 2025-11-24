import avatar1 from "../images/avatar.jpeg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderUI(this._state);
    }
}

export default store;