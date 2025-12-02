import {addPost} from "./profileReducer";
import profileReducer from "./profileReducer";

let state = {
    postsData: [
        {id: 1, title: "My first react post!!!", likesCount: '99'},
        {id: 2, title: "My second react post!!!", likesCount: '5'},
        {id: 3, title: "My react post!!!", likesCount: '24'},
    ]
}

test('add new post', () => {
    let action = addPost("add post test message")
    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4)
});

test('add new post with correct data', () => {
    let action = addPost("add post test message")
    let newState = profileReducer(state, action)

    expect(newState.postsData[3].title).toBe("add post test message")
    expect(newState.postsData[3].likesCount).toBe("0")
});