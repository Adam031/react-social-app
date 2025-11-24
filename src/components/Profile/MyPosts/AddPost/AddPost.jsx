import styles from './AddPost.module.css';
import React from "react";

export const AddPost = (props) => {
    const addPost = () => {
        props.addPost();
    }

    const updatePostMessage = (e) => {
        let text = e.target.value;
        props.updatePostMessage(text);
    }

    return (
        <div className={styles.add_post}>
            <input type="text" placeholder="Add post..." value={props.postMessage}
                   onChange={updatePostMessage} className={styles.add_post__input}/>
            <button onClick={addPost} className={styles.add_post__button}>Add</button>
        </div>
    )
}