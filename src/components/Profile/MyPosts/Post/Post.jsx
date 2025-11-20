import styles from './Post.module.css';
import circle from "../../../../images/circle.png";

function Post() {
    return (
        <div className={styles.post_row}>
            <img src={circle} alt="circle" className={styles.circle} />
            <h4>My first react post!!!</h4>
        </div>
    )
}

export default Post;