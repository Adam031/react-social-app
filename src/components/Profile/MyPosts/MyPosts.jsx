import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";

function MyPosts() {
    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <AddPost />
            <div className={styles.exist_posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;