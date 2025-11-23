import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";

function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post id={post.id} title={post.title} likesCount={post.likesCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <AddPost dispatch={props.dispatch}
                     postMessage={props.postMessage}/>
            <div className={styles.exist_posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;