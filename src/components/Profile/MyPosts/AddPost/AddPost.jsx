import React from "react";
import {AddPostForm} from "./AddPostForm";
import {reduxForm} from "redux-form";

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export const AddPost = (props) => {
    const addNewPost = (formData) => {
        props.addPost(formData.postMessage);
    }

    return (
        <AddPostReduxForm onSubmit={addNewPost} />
    )
}