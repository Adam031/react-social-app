import styles from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import React from "react";
import {DialogsForm} from "./DialogsForm";
import {reduxForm} from "redux-form";

export const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogData.map(dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name}
                                                                       avatar={dialog.avatar}/>)
    let messageElements = state.messageData.map(message => <Message id={message.id} key={message.id} text={message.message}/>)

    const sendMessage = (formData) => {
        props.sendMessage(formData.message);
    }

    const DialogsReduxForm = reduxForm({form: "dialogsForm"})(DialogsForm)

    return (
        <div className={styles.dialogs}>
            <h2>Dialogs</h2>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <DialogsReduxForm onSubmit={sendMessage} />
            </div>
        </div>
    )
}