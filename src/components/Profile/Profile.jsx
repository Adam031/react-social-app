import content_bg from '../../images/content_bg.jpg';
import styles from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div className={styles.profile}>
            <img src={content_bg} alt="content"/>
            <UserInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;