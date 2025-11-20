import styles from './AddPost.module.css';

export const AddPost = () => {
    return (
        <div className={styles.add_post}>
            <input type="text" placeholder="Add post..." className={styles.add_post__input} />
            <button type="submit" className={styles.add_post__button}>Add</button>
        </div>
    )
}