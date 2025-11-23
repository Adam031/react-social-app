import styles from './FriendsItem.module.css';

export const FriendsItem = (props) => {
    return (
        <div className={styles.friendsItem}>
            <img src={props.avatar} alt="avatar"/>
            <p>{props.name}</p>
        </div>
    )
}