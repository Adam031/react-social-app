import styles from './UserInfo.module.css';
import avatar from "../../../images/avatar.jpeg";

function UserInfo() {
    return (
        <div className={styles.user_area}>
            <img src={avatar} alt="avatar" className={styles.user_avatar} />
            <div>
                <h3>Porsche 911</h3>
                <p>City: Poznan</p>
                <p>Age: 40</p>
            </div>
        </div>
    )
}

export default UserInfo;