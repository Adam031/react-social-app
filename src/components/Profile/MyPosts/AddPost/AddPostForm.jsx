import styles from "./AddPost.module.css";
import React from "react";
import {Field} from "redux-form";
import {Input} from "../../../common/FormControls/FormControls";
import {required, maxLength} from "../../../../utils/validators/validators";

export const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.add_post}>
            <Field component={Input} name={"postMessage"} placeholder={"Add post..."}
                   className={styles.add_post__input} validate={[required, maxLength(50)]} />
            <button className={styles.add_post__button}>Add</button>
        </form>
    )
}