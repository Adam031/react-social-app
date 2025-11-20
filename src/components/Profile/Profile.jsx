import content_bg from '../../images/content_bg.jpg';
import styles from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={styles.profile}>
            <img src={content_bg} alt="content" />
            <UserInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;