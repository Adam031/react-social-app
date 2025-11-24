import avatar1 from "../images/avatar.jpeg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";

let initialState = {
    friends: [
        {id: 1, name: "Byblik", avatar: avatar1},
        {id: 2, name: "Syslik", avatar: avatar2},
        {id: 3, name: "Barilka", avatar: avatar3},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer;