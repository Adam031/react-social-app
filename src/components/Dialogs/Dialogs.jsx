import styles from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import avatar1 from "../../images/avatar.jpeg";
import avatar2 from "../../images/avatar2.jpg";
import avatar3 from "../../images/avatar3.jpg";
import avatar4 from "../../images/avatar4.jpg";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogData = [
        {id: 1, name: "Byblik", avatar: avatar1},
        {id: 2, name: "Syslik", avatar: avatar2},
        {id: 3, name: "Barilka", avatar: avatar3},
        {id: 4, name: "Tyzik", avatar: avatar4}
    ]

    let dialogsElements = dialogData.map(
        dialog => <Dialog id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
    )


    let messageData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello!"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Thanks, fine!"}
    ]

    let messageElements = messageData.map(message => <Message id={message.id} text={message.message} />)

    return (
        <div className={styles.dialogs}>
            <h2>Dialogs</h2>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}