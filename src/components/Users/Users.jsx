import React from "react";
import styles from "./Users.module.css";
import {User} from "./User/User";
import avatar1 from "../../images/avatar.jpeg";
import {Pagination} from "../common/Pagination/Pagination";

export const Users = (props) => {
    return (
        <div>
            <h2>Users</h2>
            <Pagination {...props} />
            <div className={styles.usersList}>
                {
                    props.users.map((user) =>
                        <User id={user.id} key={user.id} name={user.name}
                              followed={user.followed}
                              avatar={user.photos.small ? user.photos.small : avatar1}
                              toggleFollow={props.toggleFollow}
                        />)
                }
            </div>
        </div>
    )
}