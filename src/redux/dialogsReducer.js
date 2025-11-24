import avatar1 from "../images/avatar.jpeg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";

const SEND_MESSAGE_ACTION = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT_ACTION = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT_ACTION: {
            return {
                ...state,
                newMessageText: action.message
            }
        }
        case SEND_MESSAGE_ACTION: {
            return {
                ...state,
                messageData: [...state.messageData, {id:  5, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE_ACTION})
export const updateMessageTextActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT_ACTION, message: text})

export default dialogsReducer;