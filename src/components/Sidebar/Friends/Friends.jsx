import styles from './Friends.module.css';
import {FriendsItem} from "./FriendsItem/FriendsItem";

export const Friends = (props) => {
    let friends = props.friends.map(friend => <FriendsItem avatar={friend.avatar} name={friend.name} />);

    return (
        <div className={styles.friends}>
            <h3>Friends</h3>
            <div className={styles.friendsList}>
                {friends}
            </div>
        </div>
    )
}