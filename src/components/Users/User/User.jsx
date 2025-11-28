import styles from './User.module.css';
import {NavLink} from "react-router-dom";

export const User = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="avatar"/>
                <button onClick={() => props.toggleFollow(props.id, props.followed)}>
                    {props.followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div className={styles.info}>
                <div>
                    <NavLink to={`/profile/${props.id}`}>
                        <h3>{props.name}</h3>
                    </NavLink>
                    <p>{'props.description'}</p>
                </div>
                <div>
                    <h5>{'props.country'},</h5>
                    <h5>{'props.city'}</h5>
                </div>
            </div>
        </div>
    )
}