import styles from './Post.module.css';
import circle from "../../../../images/circle.png";

function Post(props) {
    return (
        <div className={styles.post_row}>
            <img src={circle} alt="circle" className={styles.circle} />
            <h4>{props.title}</h4>
            <div>
                <span>Like</span> - {props.likesCount}
            </div>
        </div>
    )
}

export default Post;