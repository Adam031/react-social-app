import styles from './UserInfo.module.css';
import avatar from "../../../images/avatar.jpeg";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

function UserInfo(props) {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div className={styles.user_area}>
            <img src={props.profile.photos.large || avatar} alt="avatar" className={styles.user_avatar} />
            <div>
                <h3>{props.profile.fullName}</h3>
                <ProfileStatus status={props.status} getStatus={props.getStatus} updateStatus={props.updateStatus} />
                <p><span>About me:</span> {props.profile.aboutMe}</p>
                <p><span>Looking for a job:</span> {props.profile.lookingForAJob ? 'YES!!!' : 'NO((('}</p>
                <p><span>Looking for a job description:</span> {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default UserInfo;