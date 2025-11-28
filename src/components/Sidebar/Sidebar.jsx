import styles from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "./Friends/FriendsContainer";

function Sidebar(props) {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={styles.active}>
                    <NavLink to="/profile" className={({isActive}) => (isActive ? styles.active : '')}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className={({isActive}) => (isActive ? styles.active : '')}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({isActive}) => (isActive ? styles.active : '')}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/news" className={({isActive}) => (isActive ? styles.active : '')}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" className={({isActive}) => (isActive ? styles.active : '')}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({isActive}) => (isActive ? styles.active : '')}>Settings</NavLink>
                </li>
            </ul>

            <FriendsContainer/>
        </div>
    )
}

export default Sidebar;