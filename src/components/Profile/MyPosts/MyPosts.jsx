import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostContainer from "./AddPost/AddPostContainer";

function MyPosts(props) {
    let postsElements = props.profilePage.postsData.map(post =>
        <Post id={post.id} key={post.id} title={post.title} likesCount={post.likesCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <AddPostContainer />
            <div className={styles.exist_posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;