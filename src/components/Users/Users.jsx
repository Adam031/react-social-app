import React from "react";
import styles from "./Users.module.css";
import {User} from "./User/User";
import avatar1 from "../../images/avatar.jpeg";

export const Users = (props) => {
    let pagesCount = Math.ceil(props.pagination.total / props.pagination.pageSize);

    let pagesCountArray = [];

    for (let i=1; i <= pagesCount - 5530; i++) {
        pagesCountArray.push(i);
    }
    
    return (
        <div>
            <h2>Users</h2>
            <div className={styles.pagination}>
                {pagesCountArray.map(page => {
                    return <span key={page} className={props.pagination.currentPage === page ? styles.active : undefined}
                                 onClick={() => {props.onPaginationClick(page)}}>{page}</span>
                })}
            </div>
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