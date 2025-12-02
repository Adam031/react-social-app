import avatar1 from "../images/avatar.jpeg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";

const SEND_MESSAGE_ACTION = 'dialogs/SEND-MESSAGE';

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
        case SEND_MESSAGE_ACTION: {
            return {
                ...state,
                messageData: [...state.messageData, {id:  5, message: action.message}],
            }
        }
        default:
            return state;
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE_ACTION, message})

export default dialogsReducer;