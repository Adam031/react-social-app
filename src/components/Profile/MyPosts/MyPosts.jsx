import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";

function MyPosts() {
    let postsData = [
        {id: 1, title: "My first react post!!!", likesCount: '11'},
        {id: 2, title: "My second react post!!!", likesCount: '5'},
        {id: 3, title: "My react post!!!", likesCount: '24'},
    ]

    let postsElements = postsData.map(post => <Post id={post.id} title={post.title} likesCount={post.likesCount} />)

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <AddPost />
            <div className={styles.exist_posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;