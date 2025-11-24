import {addPostActionCreator, updatePostMessageActionCreator} from "../../../../redux/profileReducer";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postMessage: state.profilePage.postMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator());},
        updatePostMessage: (text) => dispatch(updatePostMessageActionCreator(text)),
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)