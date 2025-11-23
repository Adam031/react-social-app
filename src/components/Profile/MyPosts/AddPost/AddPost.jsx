import styles from './AddPost.module.css';
import React from "react";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../../redux/state";

export const AddPost = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const updatePostMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostMessageActionCreator((text)));
    }

    return (
        <div className={styles.add_post}>
            <input type="text" placeholder="Add post..." value={props.postMessage}
                   onChange={updatePostMessage} className={styles.add_post__input}/>
            <button onClick={addPost} className={styles.add_post__button}>Add</button>
        </div>
    )
}