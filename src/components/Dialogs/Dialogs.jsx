import styles from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";

export const Dialogs = (props) => {
    let dialogsElements = props.state.dialogData.map(dialog => <Dialog id={dialog.id} name={dialog.name}
                                                                       avatar={dialog.avatar}/>)
    let messageElements = props.state.messageData.map(message => <Message id={message.id} text={message.message}/>)

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const updateMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageTextActionCreator(text));
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
                              value={props.state.newMessageText} placeholder="Message.."></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}