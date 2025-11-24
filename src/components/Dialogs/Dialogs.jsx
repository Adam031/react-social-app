import styles from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import React from "react";

export const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogData.map(dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name}
                                                                       avatar={dialog.avatar}/>)
    let messageElements = state.messageData.map(message => <Message id={message.id} key={message.id} text={message.message}/>)

    const sendMessage = () => {
        props.sendMessage();
    }

    const updateMessageText = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
    }

    return (
        <div className={styles.dialogs}>
            <h2>Dialogs</h2>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div className={styles.sendMessage}>
                    <textarea onChange={updateMessageText}
                              value={state.newMessageText} placeholder="Message.."></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}