import styles from "./Dialogs.module.css";
import React from "react";
import {Field} from "redux-form";
import {maxLength, required} from '../../utils/validators/validators'
import {Textarea} from "../common/FormControls/FormControls";

export const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.sendMessage}>
            <Field component={Textarea} name={"message"} placeholder="Message.." validate={[required, maxLength(30)]}></Field>
            <button>Send</button>
        </form>
    )
}